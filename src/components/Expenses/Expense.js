import "./Expense.css";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expense = (props) => {
  const [filterYear, setfilterYear] = useState("2020");

  const saveSelectYearHandler = (enteredYearData) => {
    console.log(enteredYearData);
    setfilterYear(enteredYearData);
    //console.log(filterYear)
  };

  const filteredExpenses = props.expenses.filter( expense => {
    return expense.date.getFullYear().toString() === filterYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onSelectYear={saveSelectYearHandler}
        />
        {filteredExpenses.map((element) => (
          <ExpenseItem
            key={element.id}
            title={element.title}
            amount={element.amount}
            date={element.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
};
export default Expense;
