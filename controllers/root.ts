import { Response, Request } from 'express'

export default class RootController {

    public static index(req: Request, res: Response) : Response {
        return res.json('Home')
    }
}