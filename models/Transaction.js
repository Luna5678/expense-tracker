const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please enter a description.']
  },
  date: {
    type: String,
    required: [true, 'Please enter the date of the transaction.']
  },
  amount: {
    type: Number,
    required: [true, 'Please enter a positive or negative amount.']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Transaction', TransactionSchema);