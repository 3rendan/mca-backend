const mongoose = require('mongoose')
const Schema = mongoose.Schema

const registrationSchema = new Schema({
    firstName: {
        type: String,
        required: true        
    },
    lastName: {
        type: String,
        required: true        
    },
    email: {
        type: String,
        required: true        
    },
    jobTitle: {
        type: String,
        required: true        
    },
    station: {        
        type: Boolean,
    },
    address: {
        type: String,
        required: true        
    },
    city: {
        type: String,
        required: true        
    },
    state: {
        type: String,
        required: true        
    },
    zip: {
        type: String,
        required: true        
    },
    country: {
        type: String,        
    },
    phone: {
        type: String, 
        required: true       
    },
    station: {
        type: Boolean,
    },
    stationName: {
        type: String,
    },
    workName: {
        type: String,
    },
    workStreet: {
        type: String,
    },
    workStreet: {
        type: String,
    },
    workCity: {
        type: String,
    },
    workState: {
        type: String,
    },
    workCountry: {
        type: String,
    },
    workZip: {
        type: String,
    },
    workPhone: {
        type: String,
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
    familyGuestName: {
        type: String,
    },
    familyGuestEvent: {
        type: [String],
    },
    businessGuestName1: {
        type: String,
    },
    businessGuest1Events: {
        type: [String],
    },
    businessGuestName2: {
        type: String,
    },
    businessGuest2Events: {
        type: [String],
    },
    totalEventCharge: {
        type: Number,
    }
}, {timestamps: true})

module.exports = mongoose.model('Registration', registrationSchema)