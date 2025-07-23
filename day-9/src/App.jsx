import React, { useState } from 'react'

function App() {
  const [val, setVal] = useState({
    name : 'Akshay',
    isBanned : false,
  });
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>Name : {val.name}</h1>
      <h2 className='text-red-500'>Status : {val.isBanned.toString()}</h2>
      <button className='bg-blue-500 text-white px-4 py-2 rounded mt-3 transition-all duration-200 active:bg-blue-700' onClick={()=>setVal({...val, isBanned: !val.isBanned})}>Change Status</button>
    </div>
  )
}

export default App