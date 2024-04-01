import React from "react";

function CardIcon({ src, height = 100, width = 100 }) {
  return (
    <div className="flex justify-center items-center">
      <img
        src={src}
        alt="Card Icon"
        height={height ? height : 100}
        width={width ? width : 100}
      />
    </div>
  );
}

export default CardIcon;
