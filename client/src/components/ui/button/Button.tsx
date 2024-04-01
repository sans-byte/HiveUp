import React from "react";

function Button({
  type = "primary",
  children,
  className = "",
  disabled = false,
  onClick = () => {
    console.log("button clicked");
  },
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`p-2 px-4 my-2 rounded-md ${className} bg-red text-black w-full ${
        disabled && "bg-slate-700"
      } ${
        type === "primary"
          ? "bg-buttonPrimary"
          : type === "secondary"
          ? "bg-buttonSecondary"
          : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
