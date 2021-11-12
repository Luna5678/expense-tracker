import Header from './components/Header';
import Balance from './components/Balance';
import TransactionContainer from './components/TransactionContainer';
import IncomeExpenses from './components/IncomeExpenses';
import { GlobalProvider } from './context/GlobalState';
import './App.scss';

function App() {
  return (
    <GlobalProvider>
      <Header title="Countrol" />
      <Balance />
      <IncomeExpenses />
      <TransactionContainer />
    </GlobalProvider>
  );
}

export default App;
