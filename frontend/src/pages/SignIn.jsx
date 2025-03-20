import { useNavigate } from "react-router-dom";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import axios from "axios";
import { useState } from "react";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gray-400 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="bg-white w-80 h-max text-center p-4 px-4 rounded-lg">
            <Heading title="Sign In" />
            <SubHeading label="Enter your credentials to access your account" />
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
                    "http://localhost:8001/api/v1/user/signin",
                    {
                      username: username,
                      password: password,
                    }
                  );
                  localStorage.setItem("token", response.data.token);
                  navigate("/dashboard");
                }}
                label="Sign In"
              />
            </div>
            <BottomWarning
              label="Don't Have an Account?"
              text="Sign Up"
              to="/signup"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
