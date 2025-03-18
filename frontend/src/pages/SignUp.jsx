import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="bg-gray-400 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="bg-white w-80 h-max text-center p-4 px-4 rounded-lg">
            <Heading title="Sign Up" />
            <SubHeading label="Enter your information to create an account" />
            <InputBox
              onchange={(e) => {
                setFirstName(e.target.value);
              }}
              title="First Name"
              placeholder="John"
            />
            <InputBox
              onchange={(e) => {
                setLastName(e.target.value);
              }}
              title="Last Name"
              placeholder="Doe"
            />
            <InputBox
              onchange={(e) => {
                setUsername(e.target.value);
              }}
              title="Email"
              placeholder="johndoe@example.com"
            />
            <InputBox
              onchange={(e) => {
                setPassword(e.target.value);
              }}
              title="Password"
              placeholder="......"
            />
            <div className="py-4">
              <Button
                onclick={async () => {
                  const response = await axios.post(
                    "http://localhost:8001/api/v1/user/signup",
                    {
                      username,
                      firstName,
                      lastName,
                      password,
                    }
                  );
                  localStorage.setItem("token", response.data.token);
                  navigate("/dashboard");
                }}
                label="Sign Up"
              />
            </div>
            <BottomWarning
              label="Already Have an Account?"
              text="Login"
              to="/signin"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
