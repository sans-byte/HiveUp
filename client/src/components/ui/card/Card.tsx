import React from "react";

function Card({ children }) {
  return (
    <div className="p-6 rounded-md  border-slate-500 border-[1px] w-96">
      {children}
    </div>
  );
}

export default Card;
