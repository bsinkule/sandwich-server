exports.up = function (knex, Promise) {
    return knex.schema.createTable('sandwich', (table) => {
        table.increments()
        table.text('name')
        table.text('description')
        table.text('imageURL')
        })
    }

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('sandwich')
}
