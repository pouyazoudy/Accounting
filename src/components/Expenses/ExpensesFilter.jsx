import React from "react";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="py-0 px-4">
      <div className="w-full flex justify-between items-center my-4 mx-0">
        <label className=" text-white font-bold mb-2">Filter by year</label>
        <select
          className="font-bold py-2 px-12 rounded-md"
          value={props.selected}
          onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
