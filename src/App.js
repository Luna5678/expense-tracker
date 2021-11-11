import Header from './components/Header';
import Balance from './components/Balance';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header title="Track Your Expenses" />
      <Balance />
    </GlobalProvider>
  );
}

export default App;
