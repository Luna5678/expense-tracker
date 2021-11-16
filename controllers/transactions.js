const Transaction = require('../models/Transaction');

// @desc Get all transactions
// @route Get /api/v1/transactions
// @access public

exports.getTransactions = async (req,res,next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    });
  } catch (err) {
    return res.send(500).json({
      success: false, 
      error: err
    })
  }
}

// @desc add one transaction
// @route Get /api/v1/transactions
// @access public

exports.addTransaction = async (req,res,next) => {
  try {
    const { text, date, amount } = req.body;
    const transaction = await Transaction.create(req.body);
    return res.status(201).json({
      success: true,
      data: transaction
    });
  } catch (err) {
    return console.log(err);
  }
}

exports.deleteTransaction = async (req,res,next) => {
  try {

  } catch (err) {
    
  }
}