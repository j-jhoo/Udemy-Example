import React, { useState } from "react";
import ExpenseFilter from "../expenseFilter/ExpenseFilter";
import ExpenseItem from "../expenseitem/ExpenseItem";
import "./Expense.css";

const Expneses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // filter사용해서 연도에 맞는 걸로 거를 수 있게 하는 코드
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <div className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {/* props.item이 있던 자리에 filter를 사용해서 만든 함수 넣기  */}
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Expneses;
