import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  const yearChartdataPoints = [
    { label: "2023", value: 0 },
    { label: "2022", value: 0 },
    { label: "2021", value: 0 },
    { label: "2020", value: 0 },
    { label: "2019", value: 0 }
  ];
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  props.allexpense.forEach(element => {
    const expenseYears = element.date.getFullYear()
    // yearChartdataPoints[expenseYears].value += element.amount
    // console.log(expenseYears);
    for(const alllabel of yearChartdataPoints){
      // console.log(alllabel.label);
      // console.log(expenseYears);
      if(alllabel.label==expenseYears){
        // console.log(expenseYears);
        alllabel.value+=element.amount
      }
    }
    
  });
  console.log(yearChartdataPoints); 
  // for (const expense of props.allexpense) {
  //   const expenseYears = expense.date.getYear(); // starting at 0 => January => 0
  //   yearChartdataPoints[expenseYears].value += expense.amount;
  // }
  // console.log(yearChartdataPoints);
  // console.log(props.allexpense);
  // console.log(chartDataPoints);
  // console.log(props.allexpense[0].date.getFullYear());
  return <Chart dataPoints={chartDataPoints} yearDatapoint={yearChartdataPoints}/>;
};

export default ExpensesChart;
