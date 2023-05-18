const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tracSchema = new Schema({
  ProgramID: {
    type: String,
    required: true
  },
  RequestorName: {
    type: String,
    required: true
  },
  RequestorTitle: {
    type: String,
    required: true
  },
  RequestorPhone: {
    type: String,
    required: true
  },
  RequestorEmail: {
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

