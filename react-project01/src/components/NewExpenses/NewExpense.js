import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const savedExpenseData=(expenseData)=>{
 const newExpenseData={
  ...expenseData,
  id: Math.trunc(Math.random()*10)
 }
 props.onAddedExpenseData(newExpenseData)
// console.log(newExpenseData);
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onsaveeExpenseForm={savedExpenseData}/>
    </div>
  );
};

export default NewExpense;
