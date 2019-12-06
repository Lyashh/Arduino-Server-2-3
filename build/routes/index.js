"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rootRouter_1 = __importDefault(require("./rootRouter"));
class Router {
    static get routes() {
        this._router.use('/', rootRouter_1.default.routes);
        return this._router;
    }
}
Router._router = express_1.Router();
exports.default = Router;
