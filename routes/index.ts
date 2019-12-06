import { Router as ExpressRouter } from 'express'
import RootRouter from './rootRouter'

export default class Router {
    private static _router: ExpressRouter = ExpressRouter();

    public static get routes() {
        this._router.use('/', RootRouter.routes)
        return this._router
    }
}