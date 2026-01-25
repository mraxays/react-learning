import React from "react";
import { Link, Outlet } from "react-router-dom";

function User() {
  return (
    <div className="p-4 bg-blue-400">
      User
      <h1 className="text-2xl font-bold">This is User Page</h1>
      <ul className="mt-4 flex flex-col gap-2 mb-5">
        <li className="bg-red-100 hover:bg-red-300 rounded">
          <Link className="block p-2" to="/user/Akshay">
            Akshay
          </Link>
        </li>
        <li className="bg-red-100 hover:bg-red-300 rounded">
          <Link className="block p-2" to="/user/Raj">
            Raj
          </Link>
        </li>
        <li className="bg-red-100 hover:bg-red-300 rounded">
          <Link className="block p-2" to="/user/Pankaj">
            Pankaj
          </Link>
        </li>
        <li className="bg-red-100 hover:bg-red-300 rounded">
          <Link className="block p-2" to="/user/Ram">
            Ram
          </Link>
        </li>
      </ul>
      <hr className="mb-2" />
      <Outlet />
    </div>
  );
}

export default User;
