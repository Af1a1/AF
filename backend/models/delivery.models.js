const mongoose = require('mongoose');

const deliverySchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('delivery', deliverySchema);
