import React from "react";

function Select({ options = [""], setSelected }) {
  return (
    <div>
      <select
        id="countries"
        className="w-full p-3 rounded-md bg-black text-white my-2"
        onChange={(e) => {
          const selectedOption = e.target.value;
          console.log("selected", selectedOption);
          setSelected(selectedOption);
        }}
      >
        <option key={""} value={""} className="m-4 text-base">
          {"Select One"}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="m-4 text-base">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
