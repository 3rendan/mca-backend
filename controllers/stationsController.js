const Station = require('../models/StationsModel')
const mongoose = require('mongoose')

const getStations = async (req, res) => {
    const stations = await Station.find({}).sort({createdAt: -1})
    res.status(200).json(stations)
}

module.exports = {
    getStations    
}