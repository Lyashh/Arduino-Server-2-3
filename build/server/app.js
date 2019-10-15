"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("../socket/index"));
const dotenv_1 = __importDefault(require("dotenv")); //add env
dotenv_1.default.config();
class App {
    constructor() {
        this._app = express_1.default();
        this._server = http_1.createServer(this._app);
        this._socket = new index_1.default(this._server);
        this.config();
    }
    config() {
        this._app.use(cors_1.default());
        this._app.set('port', process.env.PORT || 8000);
    }
    static get Instance() {
        return this._instance || (this._instance = new this());
    }
    init() {
        this._server.listen(this._app.get('port'), () => {
            console.log(`SERVER RUN ON PORT ${this._app.get('port')}`);
            this._socket.init();
        });
    }
}
exports.App = App;
const app = App.Instance;
app.init();
