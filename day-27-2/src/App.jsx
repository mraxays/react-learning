import { React } from "react";
import Show from "./components/Show.jsx";
import Home from "./components/Home.jsx";
import { NavLink, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Day 27 - 2</h1>
        <p className="my-2">Welcome to Day 27 - 2 of the challenge!</p>
        <NavLink className={({ isActive }) => ` p-2 ${isActive ? "border border-amber-300" : ""}`} to="/">Home</NavLink>
        <NavLink to="/show" className={({ isActive }) => `ml-4 p-2 ${isActive ? "border border-amber-300" : ""}`}>
          Show Products
        </NavLink>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show" element={<Show />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
