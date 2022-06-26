const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  //   user: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'user',
  //   },
  _id: false,
  code: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Number,
    required: true,
    default: 0,
  },
  vehicles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'delivery',
    },
  ],
});

module.exports = mongoose.model('product', ProductSchema);
