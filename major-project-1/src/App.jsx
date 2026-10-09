import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Action from "./components/Action"

function App() {
  return (
    <div className="bg-[#181814] text-white min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/action" element={<Action />} />
      </Routes>
    </div>
  )
}

export default App