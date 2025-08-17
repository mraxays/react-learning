import React from 'react'

function Card({ text, color }) {
  return (
     <button className={`${color} text-white px-2 py-1 rounded shadow`}>{text}</button>
  )
}

export default Card