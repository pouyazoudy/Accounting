import React from "react";

function ChartBar(props) {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100 ) + "%";
  }

  return (
    <div className="h-full flex flex-col items-center ">
      <div
        className="h-full w-4 border border-[#313131] rounded-xl bg-[#c3b4f3] 
                  overflow-hidden flex flex-col justify-end items-center ">
        <div
          className="bg-[#4826b9] w-full transition-all "
          style={{ height: barFillHeight }}></div>
      </div>
      <div className="font-bold text-xs text-center">{props.label}</div>
    </div>
  );
}

export default ChartBar;
