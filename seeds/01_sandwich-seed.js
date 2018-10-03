const sandwiches = require('../sandwichData')

exports.seed = function (knex, Promise) {
    return knex('sandwich').del()
        .then(function () {
        return knex('sandwich').insert(sandwiches)
        })
}
