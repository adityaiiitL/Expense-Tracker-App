import React, { useReducer, createContext } from "react";

import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":200,"category":"Pets","type":"Expense","date":"2022-06-04","id":"e03d68c8-a7a3-4fe6-ab12-08ee1eefe974"},{"amount":100,"category":"Business","type":"Income","date":"2022-05-31","id":"ccfea8fd-7f9e-4649-b589-be4af210be8d"},{"amount":50,"category":"Salary","type":"Income","date":"2022-06-06","id":"97b46b76-ce9a-4b27-a8f9-d5b084c2ba88"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  // Action Creaters
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  console.log(transactions);

  const balance = transactions.reduce(
    (acc, currVal) =>
      currVal.type === "Expense" ? acc - currVal.amount : acc + currVal.amount,
    0
  );

  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transactions,
        balance,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
