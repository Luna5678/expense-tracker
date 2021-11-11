import Header from './components/Header';
import Balance from './components/Balance';
import TransactionContainer from './components/TransactionContainer';
import IncomeExpenses from './components/IncomeExpenses';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header title="Track Your Expenses" />
      <Balance />
      <IncomeExpenses />
      <TransactionContainer />
    </GlobalProvider>
  );
}

export default App;
