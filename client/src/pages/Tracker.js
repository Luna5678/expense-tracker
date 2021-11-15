import { GlobalProvider } from '../context/GlobalState';

import Header from '../components/Header';
import Balance from '../components/Balance';
import TransactionContainer from '../components/TransactionContainer';
import IncomeExpenses from '../components/IncomeExpenses';
import AddTransaction from '../components/AddTransaction';

const Tracker = () => {
  return (
    <div className="tracker">
      <GlobalProvider>
        <Header title="Countrol" />
        <Balance />
        <IncomeExpenses />
        <TransactionContainer />
        <AddTransaction />
      </GlobalProvider>
    </div>
  )
}

export default Tracker;