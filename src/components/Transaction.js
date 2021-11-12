const Transaction = ({ transaction }) => {
  const dateString = new Date(transaction.date).toLocaleDateString();

  return (
    <div className="transaction">
      <p>{dateString} </p>
      <p>{transaction.text} </p>
      <p className={"transaction-amount " + (transaction.amount > 0 ? "" : "expense-text") }>
        {transaction.amount > 0 
        ? `$${(transaction.amount).toFixed(2)}` 
        : `-$${Math.abs((transaction.amount)).toFixed(2)}`
        }
      </p>
    </div>
  )
}

export default Transaction;