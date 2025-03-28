import axios from "axios";
import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;

export const Balance = () => {
  const [value, setValue] = useState(0);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${API_URL}/account/balance`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setValue(res.data.balance.toFixed(2));
      });
  }, [token]);

  return (
    <div className="flex mt-2">
      <div className="font-bold text-lg">Your balance : </div>
      <div className="font-semibold ml-2 text-lg">Rs. {value}</div>
    </div>
  );
};
