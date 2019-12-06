"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RootController {
    static index(req, res) {
        return res.json('v1');
    }
    static sensor(req, res) {
        if (req.body.sensors) {
            const io = req.app.get('socketio');
            if (io) {
                io.emmit('sensors', req.body.sensors);
                return res.json('Send sensor');
            }
            else {
                return res.json('User Not Connected');
            }
        }
        return res.sendStatus(400);
    }
}
exports.default = RootController;
