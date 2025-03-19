const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  createOrder,
  getUserOrders,
} = require('../controllers/orderController');

router.post('/create', protect, createOrder);
router.get('/my-orders', protect, getUserOrders);

module.exports = router;
