const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  orderItems: [
    {
      name: String,
      price: Number,
      quantity: Number,
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
    }
  ],
  totalAmount: Number,
  paymentStatus: {
    type: String,
    default: 'Pending',
  },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
