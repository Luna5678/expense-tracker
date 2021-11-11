const Transaction = ({ transaction }) => {
  const dateString = new Date(transaction.date).toLocaleDateString();
  return (
    <div>
      {dateString} {transaction.text} {transaction.amount}
    </div>
  )
}

export default Transaction;