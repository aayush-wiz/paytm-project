import { useEffect, useState } from "react";
import AppBar from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState("User");
  const [id, setId] = useState("");
  useEffect(() => {
    if (!token) return;
    axios
      .get(`${API_URL}/user/info`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setId(response.data.profileId);
        setUser(
          response.data.firstName[0].toUpperCase() +
            response.data.firstName.slice(1) +
            " " +
            response.data.lastName[0].toUpperCase() +
            response.data.lastName.slice(1)
        );
      })
      .catch((error) => console.error("Error fetching user info:", error));
  }, [token]);
  return (
    <>
      <div>
        <AppBar />
        <div>
          <div className="font-bold text-lg">{user}</div>
          <Balance />
          <Users userId={id} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
