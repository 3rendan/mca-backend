const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tracSchema = new Schema({
  ProgramID: {
    type: String,
            
  },
  RequestorName: {
    type: String,
            
  },
  RequestorTitle: {
    type: String,
            
  },
  RequestorPhone: {
    type: String,
            
  },
  RequestorEmail: {
    type: String,
            
  },
  Period: {
    type: String,
            
  },
  StartDate: {
    type: String,
            
  }
}, {timestamps: true})

module.exports = mongoose.model('Trac', tracSchema)

