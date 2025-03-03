const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [{
    productId: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    img: { type: String, required: true },
    color: { type: String, required: true },
    rating: { type: Number, required: true },
  }],
  totalPrice: { type: Number, required: true },
  totalQuantity: { type: Number, required: true },
});

module.exports = mongoose.model('Cart', CartSchema);