import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import User from "../components/User";
import UserDetails from "../components/UserDetails";
function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user" element={<User />}>
        {/* If You want to open UserDetails component inside User component */}
        <Route path="/user/:username" element={<UserDetails />} />
      </Route>
      {/* If You want to open UserDetails component in like new page */}
      {/* <Route path="/user/:username" element={<UserDetails />}/> */}
    </Routes>
  );
}

export default Routing;
