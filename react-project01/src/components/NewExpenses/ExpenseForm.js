import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titlechange = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountchange = (event) => {
    setEnteredAmount(event.target.value);
  };
  const datechange = (event) => {
    setEnteredDate(event.target.value);
  };
  const showExpense = (e) => {
    e.preventDefault();
  props.onchange(enteredDate)

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onsaveeExpenseForm(expenseData)
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input value={enteredTitle} onChange={titlechange} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountchange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={datechange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button"onClick={props.oncancel}>Cancel</button>
        <button type="submit" onClick={showExpense}>
          Add Expense
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
