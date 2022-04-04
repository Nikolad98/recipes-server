const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      tolowercase: true,
    },
    subtitle: {
      type: String,
      tolowercase: true,
    },
    groceries: {
      type: Array,
      required: true,
      tolowercase: true,
    },
    workflow: {
      type: Array,
      required: true,
      tolowercase: true,
    },
    time: {
      type: Number,
      required: true,
    },
    difficulty: {
      type: Number,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = { Recipe };
