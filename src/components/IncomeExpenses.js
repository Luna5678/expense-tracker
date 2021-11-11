import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts.filter(amount => amount > 0).reduce((a,b) => a+b).toFixed(2);
  const expense = amounts.filter(amount => amount < 0).reduce((a,b) => a+b).toFixed(2);

  return (
    <div>
      Income: ${income}
      Expense: ${Math.abs(expense)}
    </div>
  )
}

export default IncomeExpenses;