const express = require('express')
const Trac = require('../models/TracModel')

const { 
    createTrac,
    getTracs,
    getTrac,
    deleteTrac,
    updateTrac
 } = require('../controllers/tracsController')

const router = express.Router()

router.get('/', getTracs)
router.get('/:id', getTrac)
router.post('/', createTrac)
router.delete('/:id', deleteTrac)
router.patch('/:id', updateTrac)

module.exports = router