const mongoose = require('mongoose')

const PlaceSchema = new mongoose.Schema({
  place: {
    type: String,
    required: true
  },
  pic: {
    type: String,
    required: true
  },
  country: {
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
  date: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('Place', PlaceSchema)

