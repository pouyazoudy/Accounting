import React from "react";
import ChartBar from "./ChartBar";

function Chart(props) {
  // Ensure that dataPoints is an array before mapping
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const sumOfArray = dataPointValues.reduce((total , value) => {
    return total + value
  })


  return (
    <div className=" p-4 rounded-xl bg-[#f8dfff] text-center flex justify-around items-center h-40 ">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={sumOfArray}
          label={datapoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
