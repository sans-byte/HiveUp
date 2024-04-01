import React from "react";
import logo from "../assets/logo.png";

function FullScreenLoading() {
  return (
    <div className="w-screen h-screen ">
      <div className="w-full h-full flex justify-center items-center bg-secondary">
        <img src={logo} alt="HiveUp logo" width={100} height={100} />
      </div>
    </div>
  );
}

export default FullScreenLoading;
