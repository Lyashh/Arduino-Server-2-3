"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("../knex"));
class TemperatureModel {
    constructor() {
        this._knex = new knex_1.default;
        this._db = this._knex.connection;
    }
    insert(data) {
        return this._db.insert(data).into('temperature').returning('*');
    }
}
exports.default = TemperatureModel;
