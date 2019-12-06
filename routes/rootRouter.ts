import { Router as ExpressRouter } from 'express'
import RootController from '../controllers/root'

export default class RootRouter {
    private static _router: ExpressRouter = ExpressRouter();

    public static get routes() {
        this._router.get('/', RootController.index)
        this._router.post('/sensor', RootController.sensor)
        return this._router
    }
}