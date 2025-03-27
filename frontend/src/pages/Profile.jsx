import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileInput from "../components/ProfileInput";
import ProfileChangeButton from "../components/ProfileChangeButton";
import ProfileSubmitButton from "../components/ProfileSubmitButton";

const API_URL = import.meta.env.VITE_API_URL;

const Profile = () => {
  // State
  const [currentPassword, setCurrentPassword] = useState("");
  const [changeCred, setChangeCred] = useState(false);
  const [newCred, setNewCred] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });
  const [userIcon, setUserIcon] = useState("U");
  const [change, setChange] = useState(false);
  const [credentials, setCredentials] = useState({
    firstname: "User",
    lastname: "User",
    password: "...",
  });

  //Functions
  const handleUpdate = () => {
    if (currentPassword === credentials.password) {
      setChange(false);
      setChangeCred(true);
    }
  };

  const updateCred = async () => {
    const validatedBody = {};
    if (
      newCred.firstName.length >= 3 &&
      newCred.firstName !== credentials.firstname
    ) {
      validatedBody.firstName = newCred.firstName;
    }
    if (
      newCred.lastName.length >= 3 &&
      newCred.lastName !== credentials.lastname
    ) {
      validatedBody.lastName = newCred.lastName;
    }
    if (
      newCred.password.length >= 6 &&
      newCred.password !== credentials.password
    ) {
      validatedBody.password = newCred.password;
    }

    // Only proceed if there's at least one field to update
    if (Object.keys(validatedBody).length === 0) {
      console.log("No changes detected.");
      return;
    }

    setChangeCred((prev) => !prev);
    const res = await axios.put(`${API_URL}/user/`, validatedBody, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
  };

  //Routing
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
  }, [token, navigate]);

  return (
    <div className="bg-gray-400 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="bg-white w-80 h-max text-center p-4 px-4 rounded-lg flex flex-col items-center justify-center">
          <div className="rounded-full h-12 w-12 bg-slate-200 flex flex-col justify-center relative mt-1 mr-2 cursor-pointer">
            <div className="flex flex-col justify-center h-full text-xl ">
              {userIcon ? userIcon[0].toUpperCase() : "U"}
            </div>
          </div>
          <div className="border p-2 px-4 mt-4 text-2xl w-full">
            {/* First Name */}
            {/* Last Name */}
            {/* Password */}
            <ProfileInput
              changeCred={changeCred}
              credentials={credentials}
              setNewCred={setNewCred}
            />

            <ProfileSubmitButton
              changeCred={changeCred}
              updateCred={updateCred}
              setChange={setChange}
            />
            <ProfileChangeButton
              change={change}
              setCurrentPassword={setCurrentPassword}
              handleUpdate={handleUpdate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
