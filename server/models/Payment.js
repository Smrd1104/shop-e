const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  paymentId: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  status: { type: String, required: true },
  cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },
});

module.exports = mongoose.model('Payment', PaymentSchema);