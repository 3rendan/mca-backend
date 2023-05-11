const Program = require('../models/ProgramsModel')
const mongoose = require('mongoose')

const getPrograms = async (req, res) => {
  const programs = await Program.find({}).sort({createdAt: -1})
  res.status(200).json(programs)
}

module.exports = {
  getPrograms    
}