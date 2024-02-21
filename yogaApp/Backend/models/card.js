const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    // variable to hold image url
  image: {
    type: String,
    required: [true, 'Card image must be provided'],
  },
//   variable to hold class price
  price: {
    type: Number,
    required: [true, 'Card price must be provided'],
  },
  // variable to hold class title
  name: {
    type: String,
    required: [true, 'Card name must be provided'],
  },
  //variable to hold  class live session or recorded
  time: {
    type: Number,
    required: [true, 'Card Time must be specified'],
  },
});

module.exports = mongoose.model('card',cardSchema);