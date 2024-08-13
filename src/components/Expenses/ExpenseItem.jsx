import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle(Math.random());
  };

  return (
    <li>
      <div className="bg-[#4b4b4b] p-2 my-4 mx-0 rounded-xl flex justify-between items-center shadow-xl sm:flex sm:justify-start sm:items-center sm:flex-1 ">
        <ExpenseDate date={props.date} />

        <div className="flex flex-col justify-start items-end gap-4 flex-1 sm:flex-row sm:justify-start sm:items-center ">
          <h2 className="rounded-lg p-1 text-lg flex-1 my-0 mx-4 text-white sm:text-xl ">
            {props.title}
          </h2>

          <div className="bg-[#40005d] mx-4 text-white text-lg font-bold border border-white p-2 rounded-lg sm:text-xl sm:py-2 sm:px-6">
            ${props.amount}
          </div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </li>
  );
}
export default ExpenseItem;
