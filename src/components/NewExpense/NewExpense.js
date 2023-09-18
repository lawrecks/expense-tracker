import React from "react";

import ExpressForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense, expenses }) => {
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = { id: `e${expenses.length +1}`, ...enteredExpenseData };
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpressForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
