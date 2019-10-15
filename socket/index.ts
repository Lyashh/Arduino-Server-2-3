import io from 'socket.io'
import { Server } from 'http'
//import Message from '../db/models/message' 

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

    public init() {
        this._io.on('connect', (socket: any) => {
            console.log('Connected client ' + socket.id)
            socket.on('disconnect',() => {
                console.log('User disconnected');
            });
        })
    }

    private sendSensors(socket: any, sensorsData: sensorsData): void {
        socket.emit('sensors', sensorsData)
    }
}