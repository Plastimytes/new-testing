const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// Create a new transaction
router.post('/create', async (req, res) => {
  try {
    const { type, amount, category, date } = req.body;
    const newTransaction = new Transaction({ type, amount, category, date });
    await newTransaction.save();
    res.status(201).json({ message: 'Transaction created successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all transactions
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get transactions by category
router.get('/category/:category', async (req, res) => {
  // ...
});

// Get monthly spending report
router.get('/monthly-report', async (req, res) => {
  // ...
});

module.exports = router;