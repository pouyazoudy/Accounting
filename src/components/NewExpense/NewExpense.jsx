import React from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const ExpenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(ExpenseData);
  };

  return (
    <div className="bg-[#a892ee] p-4 my-8 mx-auto w-200 max-w-[95%] rounded-xl text-center shadow ">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
