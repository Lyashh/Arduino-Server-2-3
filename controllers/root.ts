import { Response, Request } from 'express'

export default class RootController {

    public static index(req: Request, res: Response) : Response {
        return res.json('v1')
    }

    public static sensor(req: Request, res: Response) : Response {
        if(req.body.sensors) {
            const io = req.app.get('socketio');
            if(io) {
                io.emmit('sensors', req.body.sensors)
                return res.json('Send sensor')
            } else {
                return res.json('User Not Connected')
            } 
        }
        return res.sendStatus(400)
    }
}