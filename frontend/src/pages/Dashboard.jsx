import { useEffect, useState } from "react";
import AppBar from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

const Dashboard = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }
    axios
      .get(`${API_URL}/account/balance`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const amount = res.data.balance.toFixed(2);
        setBalance(amount);
      });
  }, [token, navigate]);
  return (
    <>
      <div>
        <AppBar />
        <div>
          <Balance value={balance} />
          <Users />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
