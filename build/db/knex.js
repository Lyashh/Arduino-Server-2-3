"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config = require('../knexfile');
const knex_1 = __importDefault(require("knex"));
class Knex {
    get connection() {
        return knex_1.default(config);
    }
}
exports.default = Knex;
