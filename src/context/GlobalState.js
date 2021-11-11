import { useReducer, createContext } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions: [
    {
      text: "stimulus check",
      amount: 600
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