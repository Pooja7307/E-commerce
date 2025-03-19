const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const { userId, orderItems, totalAmount } = req.body;
  try {
    const order = await Order.create({ userId, orderItems, totalAmount });
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};
