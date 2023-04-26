const Registration = require('../models/RegistrationModel')
const mongoose = require('mongoose')

const getRegistrations = async (req, res) => {
    const registrations = await Registration.find({}).sort({createdAt: -1})
    res.status(200).json(registrations)
}
const getRegistration = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'That id is not valid'})
    }
    const registration = await Registration.findById(id)
    if(!registration) {
        return res.status(404).json({error: 'No such thing'})
    }
    res.status(200).json(registration)
}

const createRegistration = async(req, res) => {
    const { 
        firstName,
        lastName,
        email,
        confirmEmail,
        jobTitle,
        station,
        stationName,
        workName,
        workStreet,
        workCity,
        workState,
        workZip,
        workPhone,
        address,
        city,
        state,
        zip,
        country,
        phone,
        arrivalDate,
        departureDate,
        firstTime,
        newcomers,
        stayAtHotel,
        familyGuestName,
        familyGuestEvents,
        businessGuestName1,
        businessGuest1Events,
        businessGuestName2,
        businessGuest2Events
    } = req.body
    try {
        const registration = await Registration.create({ 
            firstName,
            lastName,
            email,
            confirmEmail,
            station,
            stationName,
            workName,
            workStreet,
            workCity,
            workState,
            workZip,
            workPhone,
            jobTitle,
            address,
            city,
            state,
            zip,
            country,
            phone,
            arrivalDate,
            departureDate,
            firstTime,
            newcomers,
            stayAtHotel,
            familyGuestName,
            familyGuestEvents,
            businessGuestName1,
            businessGuest1Events,
            businessGuestName2,
            businessGuest2Events
        })
        res.status(200).json(registration)       
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
const deleteRegistration = async(req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'That id is not valid'})
    }
    const registration = await Registration.findOneAndDelete({_id: id})
    if(!registration) {
        return res.status(404).json({error: 'No such thing'})
    }
    res.status(200).json(registration)
}
const updateRegistration = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'That id is not valid'})
    }
    const registration = await Registration.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!registration) {
        return res.status(404).json({error: 'No such thing'})
    }
    res.status(200).json(registration)
}

module.exports = {
    createRegistration,
    getRegistrations,
    getRegistration,
    deleteRegistration,
    updateRegistration
}