"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = __importDefault(require("socket.io"));
socket_io_1.default.listen(4100).sockets;
class Socket {
    constructor(server) {
        this._io = socket_io_1.default(server);
    }
    init() {
        this._io.on('connect', (socket) => {
            console.log('Connected client ' + socket.id);
            socket.on('disconnect', () => {
                console.log('User disconnected');
            });
        });
    }
}
exports.default = Socket;
