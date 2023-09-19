import React, { useState } from "react";

import ExpenseItem from "../ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card/Card";
import { sortById } from "../../utils/helper.utils";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear === "All" ? "" : selectedYear);
  };

  const filteredExpenses = props.expenses
    .filter((expense) =>
      filteredYear
        ? expense.date.getFullYear().toString() === filteredYear
        : true
    )
    .map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    })
    .sort(sortById);

  let expensesContent = <p className="no-expenses">No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses;
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeExpenses={filterChangeHandler}
        selectedYear={filteredYear}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
