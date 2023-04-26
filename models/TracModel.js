const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tracSchema = new Schema({
  program: {
    type: String,
    required: true        
  },
  subscriberName: {
    type: String,
    required: true        
  },
  title: {
    type: String,
    required: true        
  },
  phone: {
    type: String,
    required: true        
  },
  email: {
    type: String,
    required: true        
  },
  period: {
    type: String,
    required: true        
  },
  startDate: {
    type: String,
    required: true        
  }
}, {timestamps: true})

module.exports = mongoose.model('Trac', tracSchema)

