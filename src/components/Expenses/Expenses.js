import React from "react";

import ExpenseItem from "../ExpenseItem";

const Expenses = ({ expenses }) => {
  return expenses.map(function (expense) {
    return (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });
};

export default Expenses;
