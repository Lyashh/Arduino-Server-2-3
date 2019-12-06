import io from 'socket.io'
import { Server } from 'http'
import express from 'express'


io.listen(4100).sockets

interface sensorsData {
    title: string,
    value: number
}

export default class Socket {
    public _io: io.Server
    
    constructor(server: Server) {
        this._io = io(server)
    }

    public async init(expressApp: express.Application) {
        this._io.on('connect', (socket: any) => {
            console.log('Connected client ' + socket.id)
            expressApp.set('socketio', socket);
            //this.getSensors(socket)
            socket.on('disconnect',() => {
                console.log('User disconnected');
            })
        })
    }
}