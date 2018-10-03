const express = require('express')
const router = express.Router()
const knex = require('../db/connection')

const queries = require('../db/queries') // change to the correct path

router.get('/', (req, res) => {
    queries.getAll()
        .then(data => {
            res.json({
                data: data
            })
        })
})

router.get('/:id', (req, res) => {
    queries.getOne(req.params.id)
        .then(one => {
            res.json({
                getOne: one[0]
            })
        })
})

router.post('/', (req, res) => {
    const body = req.body

    queries.postOne(body)
        .then(post => {
            res.json({
                posted: post[0]
            })
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const body = req.body

    queries.updateOne(id, body)
        .then(update => {
            res.json({
                updated: update[0]
            })
        })
})

router.delete('/:id', (req, res) => {
    queries.deleteOne(req.params.id)
        .then(del => {
            res.json({ deleted: del[0]})
        })
})

module.exports = router