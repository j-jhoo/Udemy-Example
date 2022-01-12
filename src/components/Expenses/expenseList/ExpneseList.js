import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "../expenseitem/ExpenseItem";

const ExpenseList = (props) => {
  // 복잡한 구문이 JSX에 있으면 변수에 선언해서 변수로 전달
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
