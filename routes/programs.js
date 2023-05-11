const express = require('express')
const Programs = require('../models/ProgramsModel')
const { getPrograms } = require('../controllers/programsController')

const router = express.Router()

router.get('/', getPrograms)

module.exports = router