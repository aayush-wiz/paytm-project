import { useNavigate } from "react-router-dom";
import Appbar from "../components/AppBar";
import Hero from "../components/Hero";
import { useEffect } from "react";

function Common() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
      return;
    }
  });
  return (
    <>
      <div>
        <Appbar />
        <Hero />
      </div>
    </>
  );
}

export default Common;
