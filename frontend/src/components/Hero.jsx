import { Link } from "react-router-dom";
import InputBox from "./InputBox";
import Button from "./Button";

function Hero() {

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="mb-3 flex font-bold text-2xl bg-lime-200">
        <div className="">New User : </div>
        <Link className="cursor-pointer underline pl-3" to="/signup">
          Create a New Account
        </Link>
      </div>
      <div className="mb-3 flex font-bold text-2xl bg-red-200">
        <div className="text-center">Already a User : </div>
        <Link className="cursor-pointer underline pl-3" to="/signin">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Hero;
