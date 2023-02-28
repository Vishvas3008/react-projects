import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import "./ExpenseForm.css";

const NewExpense = (props) => {
  const [isEditing, setisEditing] = useState(false);
  const savedExpenseData = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.trunc(Math.random() * 100000000000),
    };
    props.onAddedExpenseData(newExpenseData);
    setisEditing(false);
  };
  const newExpenseAdding = () => {
    setisEditing(true); 
  };
  const cancelExpenseAdding = () => {
    setisEditing(false);
  };
  const changeWhenAdded=(year)=>{
const currYear=year.split('-')[0]
props.moveup(currYear)
  }
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={newExpenseAdding}>Add New Expense</button>
      )}
      {isEditing && (
        <div>
          <ExpenseForm
            onsaveeExpenseForm={savedExpenseData}
            oncancel={cancelExpenseAdding}
            onchange={changeWhenAdded}
          />
        </div>
      )}
    </div>
  );
};

export default NewExpense;
