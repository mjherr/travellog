const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
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
})

module.exports = mongoose.model('Place', placeSchema)

