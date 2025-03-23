import { Link } from "react-router-dom";

const Dropdown = () => {
  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="absolute text-center shadow-md border border-gray-300 rounded-sm bg-gray-100  flex flex-col cursor-pointer">
      <Link
        to="/profile"
        className="hover:bg-gray-200 px-2 py-1 border-b active:bg-gray-300"
      >
        Profile
      </Link>
      <Link
        onClick={logout}
        to="/signin"
        className="hover:bg-gray-200 px-2 py-1 active:bg-gray-300"
      >
        Logout
      </Link>
    </div>
  );
};

export default Dropdown;
