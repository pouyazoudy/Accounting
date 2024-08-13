import React from 'react';
function ExpenseDate({ date }) {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return(
    <>
      <div className="bg-[#2a2a2a] flex flex-col w-24 h-24 border text-white rounded-xl items-center justify-center ">
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
    </>
  );
}

export default ExpenseDate;
