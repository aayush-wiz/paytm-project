import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";
const API_URL = import.meta.env.VITE_API_URL;

const Profile = () => {
  const [isCurrentPassword, setIsCurrentPassword] = useState(false);
  const [userIcon, setUserIcon] = useState("U");
  const [change, setChange] = useState(false);
  const [credentials, setCredentials] = useState({
    firstname: "User",
    lastname: "User",
    password: "...",
  });

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }
    axios
      .get(`${API_URL}/user/info`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const firstname = res.data.firstName;
        const lastname = res.data.lastName;
        const password = res.data.password;
        setCredentials({
          firstname,
          lastname,
          password,
        });
        setUserIcon(firstname);
      });
  });

  // TODO: Complete Profile Page
  if (isCurrentPassword) console.log("Complete profile page");

  return (
    <div className="bg-gray-400 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="bg-white w-80 h-max text-center p-4 px-4 rounded-lg flex flex-col items-center justify-center">
          <div className="rounded-full h-12 w-12 bg-slate-200 flex flex-col justify-center relative mt-1 mr-2 cursor-pointer">
            <div className="flex flex-col justify-center h-full text-xl ">
              {userIcon[0].toUpperCase()}
            </div>
          </div>
          <div className="border p-2 px-4 mt-4 text-2xl w-full">
            <div className="shadow-md mb-1">
              {credentials.firstname[0].toUpperCase() +
                credentials.firstname.slice(1)}
            </div>
            <div className="shadow-md mt-1">
              {credentials.lastname[0].toUpperCase() +
                credentials.lastname.slice(1)}
            </div>
            <button
              onClick={() => {
                setChange((prev) => !prev);
              }}
              className="border mt-3 cursor-pointer w-full bg-gray-800 text-white py-2 rounded-md"
            >
              Change Credentials
            </button>
            {change && (
              <div className="text-lg mt-2">
                Current Password
                <input
                  onChange={(e) => {
                    const pass = e.target.value;
                    if (pass === credentials.password) {
                      setIsCurrentPassword(true);
                    }
                  }}
                  type="password"
                  className="border pl-1 w-full rounded-md border-gray-300"
                  placeholder="......"
                />
                <button className="border mt-3 cursor-pointer w-full bg-gray-800 text-white py-2 rounded-md">
                  Submit Password
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
