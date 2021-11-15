import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
  const dateString = new Date(transaction.date).toLocaleDateString();
  const { deleteTransaction } = useContext(GlobalContext);

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
      <p>
        <i className="far fa-edit edit-transaction-icon"></i>
      </p>
      <p>
        <i className="far fa-trash-alt edit-transaction-icon" onClick={() => deleteTransaction(transaction.id)}></i>
      </p>
    </div>
  )
}

export default Transaction;