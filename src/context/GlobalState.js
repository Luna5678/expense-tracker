import { useReducer, createContext } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions: [
    {
      id: 0,
      text: "stimulus check",
      date: "2021-11-01",
      amount: 600
    },
    {
      id: 1,
      text: "groceries",
      date: "2021-11-02",
      amount: -100
    }
  ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
  const [state,dispatch] = useReducer(AppReducer, initialState);

  function addTransaction(transaction) {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
  }

  function removeTransaction(id) {
    dispatch({ type: 'REMOVE_TRANSACTION', payload: id })
  }

  return(
    <GlobalContext.Provider value={{transactions: state.transactions, addTransaction, removeTransaction}}>
      {children}
    </GlobalContext.Provider>
  )
}