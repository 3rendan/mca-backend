const express = require('express')
const Registration = require('../models/RegistrationModel')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg: 'Get all registrations'})
})
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get a registration'})
})
router.post('/', async (req, res) => {
    const { 
        firstName,
        lastName,
        email,
        confirmEmail,
        jobTitle,
        companyType,
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
        stayAtHotel
    } = req.body
    try {
        const registration = await Registration.create({ 
            firstName,
            lastName,
            email,
            confirmEmail,
            jobTitle,
            companyType,
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
            stayAtHotel
        })
        res.status(200).json(registration)       
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a registration'})
})
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a registration'})
})


module.exports = router