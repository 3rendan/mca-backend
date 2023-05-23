const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tracSchema = new Schema({
  ProgramID: {
    type: String,
    required: true
  },
  RequesterName: {
    type: String,
    required: true
  },
  RequesterTitle: {
    type: String,
    required: true
  },
  RequesterPhone: {
    type: String,
    required: true
  },
  RequesterEmail: {
    type: String,
    required: true
  },
  Period: {
    type: String,
    required: true
  },
  StartDate: {
    type: String,
    required: true            
  }
}, {timestamps: true})

module.exports = mongoose.model('Trac', tracSchema)

