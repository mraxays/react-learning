import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Action from "./components/Action"
import Comedy from "./components/Comedy"
import Romance from "./components/Romance"
import Horror from "./components/Horror"
import Thriller from "./components/Thriller"

function App() {
  return (
    <div className="bg-[#181814] text-white min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/action" element={<Action />} />
        <Route path="/comedy" element={<Comedy />} />
        <Route path="/romance" element={<Romance />} />
        <Route path="/horror" element={<Horror />} />
        <Route path="/thriller" element={<Thriller />} />
      </Routes>
    </div>
  )
}

export default App