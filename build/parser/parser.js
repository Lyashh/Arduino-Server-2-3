"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const serialport_1 = __importDefault(require("serialport"));
const Readline = serialport_1.default.parsers.Readline;
class UserRouter {
    constructor() {
        this._port = new serialport_1.default('COM7', {
            baudRate: 9600
        });
        this._parser = new Readline({ delimiter: '\r\n' });
        this._port.pipe(this._parser);
        this.listenArduino();
    }
    listenArduino() {
        this._parser.on('data', (line) => {
            if (line.includes('Temperature')) {
                let arr = line.split(':');
            }
            //console.log(line);
        });
    }
}
exports.default = UserRouter;
