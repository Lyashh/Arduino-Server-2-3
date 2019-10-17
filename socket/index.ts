import io from 'socket.io'
import { Server } from 'http'
import Parser from '../parser/index'

io.listen(4100).sockets

interface sensorsData {
    title: string,
    value: number
}

export default class Socket {
    public _io: io.Server
    public _parser: Parser

    constructor(server: Server) {
        this._io = io(server)
        this._parser = new Parser
    }

    public init() {
        this._io.on('connect', (socket: any) => {
            console.log('Connected client ' + socket.id)
            socket.on('disconnect',() => {
                console.log('User disconnected');
            })
            this._parser.listenArduino(socket)
        })
    }
}