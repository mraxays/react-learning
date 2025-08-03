import React, { useState } from "react";

function App() {
  /*
    DAY - 11 - React State Update
      const [val, setVal] = useState({
    name: "Akshay",
    age: 22,
  });
    onClick={() => {
          setVal({...val, gender: "male"});
          console.log(val);
    }}
    The above code will log the previous state of `val` because state updates in React are asynchronous.

    Than the challenge is to understand that when you call `setVal`, it does not immediately update the state. Instead, it schedules an update, and the new state will be available in the next render cycle.
    Therefore, when you log `val` immediately after calling `setVal`, it will still show the old state, not the updated one.
    return (
    <div className="p-4">
      <button
        onClick={() => {
          setVal({ ...val, gender: "male" });
          console.log(val);
        }}
      >
        Click
      </button>
    </div>
  );
  */

  // DAY - 12 - React State Update
  // Challenge: Remove the last element from the array when the button is clicked.
  // The initial state is an array of numbers from 1 to 6.
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
  // The button should remove the last element from the array when clicked.
  /* 
    onClick={()=>setVal(()=>val.filter((item,index)=> index != val.length - 1))}
    This code filters the array `val` to remove the last element by checking if the index of each item is not equal to the last index (`val.length - 1`).
    The `setVal` function updates the state with the new array that excludes the last element.
    The `()=>` syntax is used to ensure that the current state of `val` is used when filtering, preventing issues with stale state in asynchronous updates.
  */
  return (
    <div className="p-4">
      {val.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
      <button onClick={()=>setVal(()=>val.filter((item,index)=> index != val.length - 1))} className="bg-blue-500 text-xs text-white py-1 px-2 rounded-full">click</button>
    </div>
  );
}

export default App;
