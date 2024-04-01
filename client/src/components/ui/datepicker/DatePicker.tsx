import React from "react";

function DatePicker({ setDate }) {
  return (
    <input
      type="date"
      className="rounded-md p-2 w-full my-2 text-center outline-none uppercase bg-slate-300"
      onChange={(e) => {
        setDate(e.target.value);
      }}
    />
  );
}

export default DatePicker;
