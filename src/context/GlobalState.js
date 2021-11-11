import { useReducer, createContext } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions: [
    {
      text: "stimulus check",
      date: "2021-11-01",
      amount: 600
    },
    {
      text: "groceries",
      date: "2021-11-02",
      amount: -100
    }
  ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
  const [state,dispatch] = useReducer(AppReducer, initialState);

  return(
    <GlobalContext.Provider value={{transactions: state.transactions}}>
      {children}
    </GlobalContext.Provider>
  )
}