import React, { useState } from "react";

import "./ExpensesFilter.css";
import { DUMMY_EXPENSES } from "../../App";

const ExpensesFilter = ({ onUpdateExpenses }) => {
  const [filteredYear, setFilteredYear] = useState("");

  const expenseFilterHandler = (e) => {
    setFilteredYear(e.target.value);
    const filteredExpenses = DUMMY_EXPENSES.filter(
      (expense) => expense.date.getFullYear().toString() === e.target.value
    );
    onUpdateExpenses(filteredExpenses);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={expenseFilterHandler} value={filteredYear}>
          <option hidden={true}></option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
