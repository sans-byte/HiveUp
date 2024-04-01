import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FullScreenLoading from "../components/FullScreenLoading";

function Home() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }, []);

  return <FullScreenLoading />;
}
export default Home;
