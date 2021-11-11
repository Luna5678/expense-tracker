const Transaction = ({ transaction }) => {
  const dateString = new Date(transaction.date).toLocaleDateString();

  return (
    <div>
      {dateString} 
      {transaction.text} 
      {transaction.amount > 0 
        ? `$${(transaction.amount).toFixed(2)}` 
        : `-$${Math.abs((transaction.amount)).toFixed(2)}`
      }
    </div>
  )
}

export default Transaction;