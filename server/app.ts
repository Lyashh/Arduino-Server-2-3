import express from 'express'
import {createServer, Server} from 'http'
import cors from 'cors'

import socket from '../socket/index'

import doenv from 'dotenv'  //add env
doenv.config()

export class App {
    private static _instance: App
    private _app: express.Application
    private _server: Server
    private _socket: any

    constructor() {
        this._app = express()
        this._server = createServer(this._app)
        this._socket = new socket(this._server)
        this.config()

    }

    private config() {
        this._app.use(cors())
        this._app.set('port', process.env.PORT || 8000)
    }

    public static get Instance(): App {
        return this._instance || (this._instance = new this())
    }   

    public init() {
        this._server.listen(this._app.get('port'), () => {
            console.log(`SERVER RUN ON PORT ${ this._app.get('port') }`)
            this._socket.init()
        })
    }
}

const app = App.Instance
app.init()