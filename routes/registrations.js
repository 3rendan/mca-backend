const express = require('express')
const Registration = require('../models/RegistrationModel')
const { 
    createRegistration,
    getRegistrations,
    getRegistration,
    deleteRegistration,
    updateRegistration
 } = require('../controllers/registrationsController')

const router = express.Router()

router.get('/', getRegistrations)
router.get('/:id', getRegistration)
router.post('/', createRegistration)
router.delete('/:id', deleteRegistration)
router.patch('/:id', updateRegistration)


module.exports = router