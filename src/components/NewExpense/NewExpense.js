import React from "react";

import ExpressForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ addExpenseHandler, expenses }) => {
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = { id: `e${expenses.length +1}`, ...enteredExpenseData };
    addExpenseHandler(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpressForm saveExpenseHandler={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
