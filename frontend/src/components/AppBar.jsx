import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
const API_URL = import.meta.env.VITE_API_URL;

const Appbar = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [userIcon, setUserIcon] = useState("U");
  const [dropdown, setDropdown] = useState(false);

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
        setIsAuth(true);
        setUserIcon(firstname);
      });
  });

  const handleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <>
      <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4 font-semibold">
          <Link to={"/"}>PayTM App</Link>
        </div>
        {(isAuth && (
          <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
              Hello
            </div>
            <div className="flex flex-col">
              <button onClick={handleDropdown}>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex flex-col justify-center relative mt-1 mr-2 cursor-pointer">
                  <div className="flex flex-col justify-center h-full text-xl ">
                    {userIcon[0].toUpperCase()}
                  </div>
                </div>
              </button>
            </div>
          </div>
        )) || (
          <div className="w-45 flex justify-evenly mr-2">
            <Link
              to="/signin"
              className="py-2 px-4 m-2 cursor-pointer bg-gray-100 rounded-sm hover:bg-gray-200 active:bg-gray-300 border border-gray-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="p-2 m-2 cursor-pointer bg-gray-100 rounded-sm hover:bg-gray-200 active:bg-gray-300 border border-gray-200"
            >
              SignUp
            </Link>
          </div>
        )}
      </div>
      <div className="flex justify-end">
        <div className="flex flex-col w-24 mr-3 font-medium text-xl pl-2 mt-2 rounded-md">
          {dropdown && <Dropdown />}
        </div>
      </div>
    </>
  );
};

export default Appbar;
