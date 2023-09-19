import React, { useState } from "react";

import "./ExpenseForm.css";

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${year}-${month < 10 ? "0" + month : month}-${
  day < 10 ? "0" + day : day
}`;

const ExpressForm = ({ onSaveExpense }) => {
  const [expenseInput, setExpenseInput] = useState({
    inputTitle: "",
    inputAmount: "",
    inputDate: "",
  });

  const inputChangeHandler = (identifier, value) => {
    setExpenseInput((prevState) => {
      if (identifier === "title") {
        return { ...prevState, inputTitle: value };
      } else if (identifier === "amount") {
        return { ...prevState, inputAmount: value };
      } else return { ...prevState, inputDate: value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expense = {
      title: expenseInput.inputTitle,
      amount: Number(expenseInput.inputAmount),
      date: new Date(expenseInput.inputDate),
    };

    onSaveExpense(expense);
    setExpenseInput({ inputTitle: "", inputAmount: "", inputDate: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            required={true}
            type="text"
            value={expenseInput.inputTitle}
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            required={true}
            type="number"
            value={expenseInput.inputAmount}
            min="0.01"
            step="0.01"
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            required={true}
            type="date"
            value={expenseInput.inputDate}
            min="2019-01-01"
            max={currentDate}
            onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpressForm;
