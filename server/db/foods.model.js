const mongoose = require('mongoose');

const fastFoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  allergens: [
    {
      type: Number, 
    },
  ],
  ingredients: [
    {
      type: String,
    },
],
  category: {
    type: String,
    required: true,
  },
  
});

const FastFood = mongoose.model('FastFood', fastFoodSchema);

module.exports = FastFood;