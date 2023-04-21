const express = require('express')
const Stations = require('../models/StationsModel')
const { getStations } = require('../controllers/stationsController')

const router = express.Router()

router.get('/', getStations)

module.exports = router