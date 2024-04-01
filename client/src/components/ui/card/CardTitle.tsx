import React from "react";

function CardTitle({ children }) {
  return (
    <div className="text-md flex justify-center items-center text-white my-4">
      {children}
    </div>
  );
}

export default CardTitle;
