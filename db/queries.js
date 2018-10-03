const knex = require('./connection')

const getAll = () => knex('sandwich').orderBy('id', 'desc') // change 'moped' on all to your table_name
const getOne = (id) =>  knex('sandwich').where('id', id)
const postOne = (body) => knex('sandwich').insert(body).returning('*')
const updateOne = (id, body) => knex('sandwich').where('id', id).update(body).returning('*')
const deleteOne = (id) => knex('sandwich').where('id', id).del().returning('*')

module.exports = {
    getAll,
    getOne,
    postOne,
    updateOne,
    deleteOne
}