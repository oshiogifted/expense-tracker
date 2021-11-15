/* Context-API */
import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  transactions: []
}


// Create context
export const GlobalContext = createContext(initialState);

// Provider component - provdes state to child components it wraps around
// children props
export const GlobalProvider = ({ children }) => {
  // AppReducer - looks for any dispatch calls & updates accordingly
  // initialState - default app state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions - makes call to reducer to update state
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>

  );
}
