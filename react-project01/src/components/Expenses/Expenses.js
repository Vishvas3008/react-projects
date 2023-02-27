import React,{useState} from "react";
import Expanseitem from "./Expenseitem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
const Expenses = (props)=>{
const [yearData,setYearData]=useState('2020')
const dropdownChangeCatcher=(dropdowndata)=>{
  setYearData(dropdowndata)
  console.log(dropdowndata);
}

    return(
        <div className="expenses">
      <ExpenseFilter dropdowndata={yearData}onchangeddropdown={dropdownChangeCatcher}/>
      <Expanseitem
        title={props.expenses[0].title}
        date={props.expenses[0].date}
        amount={props.expenses[0].amount}
      />
      <Expanseitem
        title={props.expenses[1].title}
        date={props.expenses[1].date}
        amount={props.expenses[1].amount}
      />
      <Expanseitem
        title={props.expenses[2].title}
        date={props.expenses[2].date}
        amount={props.expenses[2].amount}
      />
      <Expanseitem
        title={props.expenses[3].title}
        date={props.expenses[3].date}
        amount={props.expenses[3].amount}
      />
    </div>
    )

}
export default Expenses