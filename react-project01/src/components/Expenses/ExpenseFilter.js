import React from "react";
import "./ExpensesFilter.css";
import { useDispatch } from "react-redux";
import { chartActions } from "../../store/ExpenseStore";

const ExpenseFilter = (props) => {
  const dispatch=useDispatch()
  const dropdownChangeHandler = (e) => {
    props.onchangeddropdown(e.target.value);
    // console.log(e.target.value);
  };
  const onchangehandler=(e)=>{
    if(e.target.value=="allYear"){
      dispatch(chartActions.chartToggler())
    }
    if(e.target.value=="yearWiseMonths"){
      dispatch(chartActions.chartToggler())
    }

  }
  return (
    <div className="expenses-filter">
      <p>Filter</p>
      <div className="expenses-filter__control">
        <select  onChange={onchangehandler}>
          <option value="yearWiseMonths">Filter by Year</option>
          <option value="allYear">All Years</option>
        </select>
        <select value={props.dropdowndata} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
export default ExpenseFilter;
