import React, { useState, useEffect } from "react";
import Expanseitem from "./Expenseitem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import { useSelector } from "react-redux";
const Expenses = (props) => {
  const [yearData, setYearData] = useState(props.todownYear);
  const togglevalue = useSelector((state) => state.shoingYearChart);

  // console.log(props.todownYear);
  // console.log(yearData);
  // if (yearData !== props.todownYear) {
  //   setYearData(props.todownYear);
  // }
  useEffect(() => {
    setYearData(props.todownYear);
  }, [props.todownYear]);
  let filterdExpense=[]
  // console.log(props.expenses);
  if (togglevalue) {
    filterdExpense = props.expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === yearData;
    });
  }
  if(!togglevalue){
    filterdExpense=props.expenses
  }
  let filterdata = <div className="forline">No Expense Found!</div>;
  const dropdownChangeCatcher = (dropdowndata) => {
    setYearData(dropdowndata);
    console.log(dropdowndata);
  };

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
      <ExpensesChart expenses={filterdExpense} allexpense={props.expenses} />
      {filterdata}
    </div>
  );
};
export default Expenses;
