const config = require('../knexfile')
import knex from 'knex'

export default class Knex {
    public  get connection() {
        return knex(config)
    }
}