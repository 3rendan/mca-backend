const mongoose = require('mongoose')
const Schema = mongoose.Schema

const programsSchema = new Schema({
  programtitle: {
    type: String,
    required: true        
  }
}, {timestamps: true})

module.exports = mongoose.model('Programs', programsSchema)