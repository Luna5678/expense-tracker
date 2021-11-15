import Header from './components/Header';
import Balance from './components/Balance';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TransactionContainer from './components/TransactionContainer';
import IncomeExpenses from './components/IncomeExpenses';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
      <GlobalProvider>
        <Header title="Countrol" />
        <Balance />
        <IncomeExpenses />
        <TransactionContainer />
        <AddTransaction />
      </GlobalProvider>
    </>
  );
}

export default App;
