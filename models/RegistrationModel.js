const mongoose = require('mongoose')
const Schema = mongoose.Schema

const registrationSchema = new Schema({
    firstName: {
        type: String,        
    },
    lastName: {
        type: String,        
    },
    email: {
        type: String,        
    },
    confirmEmail: {
        type: String,        
    },
    jobTitle: {
        type: String,        
    },
    station: {        
        type: Boolean,
    },
    address: {
        type: String,        
    },
    city: {
        type: String,        
    },
    state: {
        type: String,        
    },
    zip: {
        type: String,        
    },
    country: {
        type: String,        
    },
    phone: {
        type: Number,        
    },
    arrivalDate: {
        type: Date,        
    },
    departureDate: {
        type: Date,        
    },
    firstTime: {        
        type: Boolean,
    },
    newcomers: {        
        type: Boolean,
    },
    stayAtHotel: {
        type: Boolean,        
    },
    totalEventCharge: {
        type: Number,
    }
}, {timestamps: true})

module.exports = mongoose.model('Registration', registrationSchema)