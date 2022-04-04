const mongoose = require('mongoose');

const grocerieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      tolowercase: true,
    },
    expDate: {
      type: Date,
      required: true,
    },
    amount: {
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

const Grocerie = mongoose.model('grocerie', grocerieSchema);

module.exports = { Grocerie };
