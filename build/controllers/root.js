"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RootController {
    static index(req, res) {
        return res.json('Home');
    }
}
exports.default = RootController;
