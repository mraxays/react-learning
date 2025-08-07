import React, { useState } from "react";

function App() {
  const [val, setVal] = useState([1, 2, 3, 4, 5]);

  /* 
    This function is used to add a new item to the list
    {() => setVal([...val, val.length + 1])}
    It appends the next number in sequence to the existing array
    by creating a new array with the spread operator.
    
  */
  return (
    <div className="p-4">
      <button
        className="bg-blue-500 text-white text-xs px-2 py-1 rounded"
        onClick={() => setVal([...val, val.length + 1])}
      >
        Add Item
      </button>
      <h1 className="my-2">List of Items</h1>
      {val.map((item) => (
        <h1
          className="py-1 px-2 mx-2 my-1 text-white rounded bg-amber-600 inline-block"
          key={item}
        >
          {item}
        </h1>
      ))}
    </div>
  );
}

export default App;
