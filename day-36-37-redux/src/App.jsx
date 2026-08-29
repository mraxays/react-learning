import React from 'react'
import { Link, Route, Routes, } from 'react-router-dom'
import Users from './components/Users'
import Products from './components/Products'
import Home from './components/Home'

function App() {
  return (
    <>
      <nav className="bg-neutral-900 text-neutral-100 py-4 px-6">
        <ul className="flex justify-center gap-4 text-lg font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  )
}

export default App