import React, { useEffect, useState } from "react";
import logo from "../assets/logoWithBack.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }, []);

  return (
    <div className="w-screen h-screen ">
      <div className="w-full h-full flex justify-center items-center bg-secondary">
        <img src={logo} alt="HiveUp logo" width={100} height={100} />
      </div>
    </div>
  );
}
export default Home;
