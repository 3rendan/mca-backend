const Trac = require('../models/TracModel')
const mongoose = require('mongoose')

const getTracs = async (req, res) => {
    const tracs = await Trac.find({}).sort({createdAt: -1})
    res.status(200).json(tracs)
}
const getTrac = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'That id is not valid'})
    }
    const trac = await Trac.findById(id)
    if(!trac) {
        return res.status(404).json({error: 'No such thing'})
    }
    res.status(200).json(trac)
}

const createTrac = async(req, res) => {
    const { 
        ProgramID,
        RequestorName,
        RequestorCompany,
        RequestorTitle,
        RequestorPhone,
        RequestorEmail,
        Period,
        StartDate
    } = req.body
    try {
        const trac = await Trac.create({ 
            ProgramID,
            RequestorName,
            RequestorCompany,
            RequestorTitle,
            RequestorPhone,
            RequestorEmail,
            Period,
            StartDate
        })
        res.status(200).json(trac)       
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
const deleteTrac = async(req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'That id is not valid'})
    }
    const trac = await Trac.findOneAndDelete({_id: id})
    if(!trac) {
        return res.status(404).json({error: 'No such thing'})
    }
    res.status(200).json(trac)
}
const updateTrac = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'That id is not valid'})
    }
    const trac = await Trac.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!trac) {
        return res.status(404).json({error: 'No such thing'})
    }
    res.status(200).json(trac)
}

module.exports = {
    createTrac,
    getTracs,
    getTrac,
    deleteTrac,
    updateTrac
}