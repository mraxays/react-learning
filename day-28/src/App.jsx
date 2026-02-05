import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import About from "./components/About";
import Userdetails from "./components/Userdetails";

function App() {
  return (
    <div className="p-5">
      <h1>Day 28: Context API</h1>
      <p>Welcome to Day 28! Today we will learn about the Context API.</p>

      <nav className="bg-slate-200 px-2 py-2 flex gap-4 my-5 ">
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />}>
          <Route path="/user/:id" element={<Userdetails />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
