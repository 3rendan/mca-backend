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
    confirmEmail: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    companyType: {
        type: String,
        required: true
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
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    arrivalDate: {
        type: Date,
        required: true
    },
    departureDate: {
        type: Date,
        required: true
    },
    firstTime: {
        type: Boolean,
        required: true
    },
    newcomers: {
        type: Boolean,
        required: true
    },
    stayAtHotel: {
        type: Boolean,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Registration', registrationSchema)