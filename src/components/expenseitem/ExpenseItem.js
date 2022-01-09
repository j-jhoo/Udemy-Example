import React, { useState } from "react";
import ExpenseDate from "../expensedate/ExpenseDate";
import "./ExpenseItems.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log("바껴라!!");
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Cange Title</button>
    </div>
  );
};

export default ExpenseItem;
