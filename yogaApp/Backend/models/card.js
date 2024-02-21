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
  title: {
    type: String,
    required: [true, 'Card title must be provided'],
  },
  //variable to hold  class live session or recorded
  live: {
    type: Boolean,
    required: [true, 'Card live status must be specified'],
  },
});

module.exports = mongoose.model('card',cardSchema);