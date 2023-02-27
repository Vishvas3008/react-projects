import React, { useState } from "react";
import Expanseitem from "./Expenseitem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [yearData, setYearData] = useState("2023");
  const dropdownChangeCatcher = (dropdowndata) => {
    setYearData(dropdowndata);
    console.log(dropdowndata);
  };
  const filterdExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === yearData;
  });
  let filterdata = <div className="forline">No Expense Found!</div>;
  
    if (filterdExpense.length > 0) {
      filterdata = filterdExpense.map((expense) => {
        return (
          <Expanseitem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        );
      });
    }
  
  return (
    <div className="expenses">
      <ExpenseFilter
        dropdowndata={yearData}
        onchangeddropdown={dropdownChangeCatcher}
      />
      <ExpensesChart expenses={filterdExpense} />
      {filterdata}
    </div>
  );
};
export default Expenses;
