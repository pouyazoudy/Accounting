import React, { useState } from "react";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-wrap gap-4 mb-4 text-left">
        <div>
          <label className="font-bold mb-2 block ">Title</label>
          <input
            type="text"
            className="font-bold p-4 rounded-md border border-[#ccc] w-80 max-w-[%100] "
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div>
          <label className="font-bold mb-2 block ">َAmount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            className="font-bold p-4 rounded-md border border-[#ccc] w-80 max-w-[%100] "
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div>
          <label className="font-bold mb-2 block ">َDate</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            className="font-bold p-4 rounded-md border border-[#ccc] w-80 max-w-[%100] "
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="text-right">
        <button type="submit"
                className=" w-32 h-12 bg-[#40005d] text-white border rounded-xl "
        >Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
