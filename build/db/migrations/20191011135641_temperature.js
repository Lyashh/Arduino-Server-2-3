
exports.up = function(knex) {
    return knex.schema.createTable('temperature', (table) => {
        table.increments()
        table.string('value')
        table.timestamp('date').notNullable().defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('temperature')
};
