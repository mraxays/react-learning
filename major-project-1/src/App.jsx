import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"

function App() {
  return (
    <div className="bg-[#181814] text-white min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App