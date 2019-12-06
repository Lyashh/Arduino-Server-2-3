"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const root_1 = __importDefault(require("../controllers/root"));
class RootRouter {
    static get routes() {
        this._router.get('/', root_1.default.index);
        this._router.post('/sensor', root_1.default.sensor);
        return this._router;
    }
}
RootRouter._router = express_1.Router();
exports.default = RootRouter;
