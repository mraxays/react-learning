import { React, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../context/Context";

function User() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h4>User List</h4>
      <ul className="list-disc list-inside">
        {user.map((item) => (
          <li key={item.id} className="text-blue-500">
            <Link to={`/user/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <hr className="py-4 mt-4" />
      <Outlet />
    </div>
  );
}

export default User;
