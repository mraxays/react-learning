import React, { useState } from "react";

function App() {
  const [val, setVal] = useState({
    name: "Akshay",
    isBanned: false,
  });
  /*
  onClick={()=>setVal({...val, isBanned: !val.isBanned})}
  
  When clicked, it toggles the isBanned property of the val object — true becomes false and vice versa.
  Breakdown:
  ->  ...val keeps all other properties the same.

  ->   !val.isBanned flips the current value of isBanned.
  */
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Name : {val.name}</h1>
      <h2 className={`${val.isBanned ? "text-red-500" : "text-green-500"}`}>Status : {val.isBanned.toString()}</h2>
      <button
        className={`${val.isBanned ? "bg-red-500 active:bg-red-700" : "bg-blue-500 active:bg-blue-700"} text-white px-4 py-2 rounded mt-3 transition-all duration-200 `}
        onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
      >
        Change Status
      </button>
    </div>
  );
}

export default App;
