"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = __importDefault(require("socket.io"));
socket_io_1.default.listen(4100).sockets;
class Socket {
    constructor(server) {
        this._io = socket_io_1.default(server);
    }
    init(expressApp) {
        return __awaiter(this, void 0, void 0, function* () {
            this._io.on('connect', (socket) => {
                console.log('Connected client ' + socket.id);
                expressApp.set('socketio', socket);
                //this.getSensors(socket)
                socket.on('disconnect', () => {
                    console.log('User disconnected');
                });
            });
        });
    }
}
exports.default = Socket;
