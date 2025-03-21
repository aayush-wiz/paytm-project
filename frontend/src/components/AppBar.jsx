import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

const Appbar = () => {
  const [userIcon, setUserIcon] = useState("U");
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) return;
    axios
      .get(`${API_URL}/user/info`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const firstname = res.data.firstName;
        setUserIcon(firstname);
      });
  });
  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4 font-semibold">
        <Link to={"/"}>PayTM App</Link>
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">Hello</div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {userIcon[0].toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
