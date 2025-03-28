import { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

export const Users = ({ userId }) => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (!userId) return;

    axios
      .get(`${API_URL}/user/bulk?filter=${filter}`)
      .then((response) => {
        setUsers(response.data.user);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, [filter, userId]);

  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
        ></input>
      </div>
      <div>
        {users
          .filter((user) => user._id !== userId)
          .map((user) => (
            <User key={user._id} user={user} />
          ))}
      </div>
    </>
  );
};

function User({ user }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0].toUpperCase()}
          </div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <div>
            {user.firstName[0].toUpperCase() + user.firstName.slice(1)}{" "}
            {user.lastName[0].toUpperCase() + user.lastName.slice(1)}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-full mr-2">
        <Button
          onclick={() => {
            navigate(`/send?id=${user._id}&name=${user.firstName}`);
          }}
          label={"Send Money"}
        />
      </div>
    </div>
  );
}
