const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stationsSchema = new Schema({
  station: {
    type: String,
    required: true        
  }

}, {timestamps: true})

module.exports = mongoose.model('Stations', stationsSchema)