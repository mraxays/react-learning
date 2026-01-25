import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import User from "../components/User";
import UserDetails from "../components/UserDetails";
function Routing() {
  return (
     <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/user/:username" element={<UserDetails />}></Route>
      </Routes>
  )
}

export default Routing