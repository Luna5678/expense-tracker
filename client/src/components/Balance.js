import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amountsArray = transactions.map(transaction => transaction.amount);
  const total = amountsArray.reduce((a,b) => a+b).toFixed(2);
  return (
    <h2 className="heading">Current cash balance: { total > 0 ? `$${total}` : `-$${(Math.abs(total)).toFixed(2)}` }</h2>
  )
}

export default Balance;