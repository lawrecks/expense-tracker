import React from "react";

import ExpenseItem from "../ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card/Card";

const Expenses = (props) => {
  const updateExpensesHandler = (expenses) => {
    props.onChangeExpenses(expenses);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onUpdateExpenses={updateExpensesHandler}
        expenses={props.expenses}
      />
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
