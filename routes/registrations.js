const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg: 'Get all registrations'})
})
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get a registration'})
})
router.post('/', (req, res) => {
    res.json({mssg: 'Post new registration'})
})
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a registration'})
})
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a registration'})
})


module.exports = router