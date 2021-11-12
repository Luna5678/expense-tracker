import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts.filter(amount => amount > 0).reduce((a,b) => a+b).toFixed(2);
  const expense = Math.abs(amounts.filter(amount => amount < 0).reduce((a,b) => a+b)).toFixed(2);

  return (
    <div className="income-expense-container">
      <div className="income-expense-box">
        <h3>
        <span class="success">Income</span> ${income}
        </h3>
      </div>
      <div className="income-expense-box">
        <h3>
        <span class="warning">Expense</span> ${expense}
        </h3>
      </div>
    </div>
  )
}

export default IncomeExpenses;