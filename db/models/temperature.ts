import knex from '../knex'
import { Sensor } from '../../parser/index'

export default class TemperatureModel {
    private _knex: knex
    private _db: any

    constructor() {
        this._knex = new knex
        this._db = this._knex.connection        
    }

    private insert(data: Sensor) {
        return this._db.insert(data).into('temperature').returning('*')
    }
}



