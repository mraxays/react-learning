import {React, useState } from 'react'

function App() {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div className="p-4 space-x-2">
      {val.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
      <button onClick={()=>setVal(()=>val.filter((item,index)=> index !=2))} className="bg-blue-500 text-xs text-white py-1 px-2 rounded-full">Remove 3rd Value</button>
      <button onClick={()=>setVal(()=>val.filter(item=> item % 2 !== 0))} className="bg-blue-500 text-xs text-white py-1 px-2 rounded-full">Remove Even</button>
    </div>
  );
}

export default App