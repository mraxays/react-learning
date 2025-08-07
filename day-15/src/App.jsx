import React, { useState } from "react";

function App() {
  const [val, setVal] = useState([
    { name: "Virat Kohli", age: 34 },
    { name: "Rohit Sharma", age: 36 },
    { name: "MS Dhoni", age: 42 },
    { name: "Sachin Tendulkar", age: 50 },
  ]);

  /* 
  Intermediate

  The code below is used to update the age of "Virat Kohli" to 35.
  When the button is clicked, it maps through the `val` array and checks if the
  name is "Virat Kohli". If it is, it returns a new object with the updated age.
  Otherwise, it returns the item as is.
  */

  return (
    <div className="p-4">
      <button
        className="bg-blue-500 text-white text-xs px-2 py-1 rounded"
        onClick={() => {
          setVal(() =>
            val.map((item) =>
              item.name === "Virat Kohli"
                ? { name: "Virat Kohli", age: 35 }
                : item
            )
          );
        }}
      >
        Add Item
      </button>
      <h1 className="my-2">List of Items</h1>
      {val.map((item) => (
        <div key={item.name} className="border p-2 my-1 w-sm">
          <h2 className="text-lg font-bold">{item.name}</h2>
          <p className="text-sm">Age: {item.age}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
