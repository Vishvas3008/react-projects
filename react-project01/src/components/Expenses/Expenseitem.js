import React,{useState}from "react";
import "./Expenseitem.css";
import Date from "./Expensedate";

const Expenseitem = (props) => {
 const [title,setTitle]=useState(props.title)
  const clicked = ()=>{
    setTitle('Updated!')
    console.log(title,setTitle);
  }
  return (
    <div className="expense-item">
      <Date date={props.date}></Date>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}$</div>
      </div>
      <button onClick={clicked}>change</button>
    </div>
  );
};

export default Expenseitem;
 




















