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

  let expensesContent = <p>No expenses found.</p>;
  // 복잡한 구문이 JSX에 있으면 변수에 선언해서 변수로 전달
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <div className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
        {/* props.item이 있던 자리에 filter를 사용해서 만든 함수 넣기  */}
      </div>
    </div>
  );
};

export default Expneses;
