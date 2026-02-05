import { React, useContext } from "react";
import { UserContext } from "../context/Context";
import { useParams,Link } from "react-router-dom";
function Userdetails() {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const userDetails = user.find((item) => item.id === parseInt(id));
  return <div>
    <h4>User Details</h4>
    {userDetails ? (
      <div>
        <p><strong>Name:</strong> {userDetails.name}</p>
        <p><strong>Email:</strong> {userDetails.email}</p>
      </div>
    ) : (
      <p>User not found</p>
    )}
    <Link to="/user" className="text-blue-500">Back to User List</Link>
  </div>;
}

export default Userdetails;
