import React, { useState } from 'react'

function App() {
  const [val, setVal] = useState(12);
  /*
  onClick={()=>setVal((prev)=>prev+1)}
  and one liner functional update
  onClick={()=>setVal(val+1)}
  or 
  onClick={()=>setVal(prev=>prev+1)}
  */
  return (
    <div className='p-4'>
      <h1>{val}</h1>
      <button className='bg-blue-500 text-white px-4 py-2 rounded mt-3 transition-all duration-200 active:bg-blue-700' onClick={()=>setVal((prev)=>prev+1)}>Increment</button>
    </div>
  )
}

export default App