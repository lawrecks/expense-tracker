import React, { useState } from "react";

import "./App.css";
import Expenses from "./components/Expenses";
import "./components/Expenses/Expenses.css";
import NewExpense from "./components/NewExpense/NewExpense";
import { sortById } from "./utils/helper.utils";

export const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "New Chair",
    amount: 230,
    date: new Date(2023, 5, 12),
  },
  {
    id: "e6",
    title: "Power Bills",
    amount: 500,
    date: new Date(2023, 3, 1),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [...prevState, expense].sort(sortById);
    });
  };

  return (
    <div className="App">
      <h2>Expense tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler} expenses={expenses} />
      <div>
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
};

export default App;
