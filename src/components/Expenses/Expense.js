import "./Expense.css";
import Card from "./Card";
import React, { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {
  const [filterYear, setfilterYear] = useState("2020");

  const saveSelectYearHandler = (enteredYearData) => {
    console.log(enteredYearData);
    setfilterYear(enteredYearData);
    //console.log(filterYear)
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onSelectYear={saveSelectYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expense;
