import React, {useState} from "react";
// import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpenses/NewExpense";
const App = () => { 
  const dummyexpenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 30),
    },
    { id: "e2", 
      title: "New TV", 
      amount: 799.49, 
      date: new Date(2021, 2, 12) 
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [newexpense,setNewexpense]=useState(dummyexpenses)
  const [year,setyear]=useState('')

  const addingNewExpense=(data)=>{
    setNewexpense((prevExpenses)=>{
      return[data,...prevExpenses]

    })
  }
  
  const yearToAppjs=(year)=>{
    setyear(year)
    return year
  }
  return (
    <div>
      <NewExpense onAddedExpenseData={addingNewExpense} moveup={yearToAppjs} />
      <Expenses expenses={newexpense} todownYear={year} />
    </div>
  );
};

export default App;
