import React, { useState } from "react";

function App() {
  // This is a simple React component that uses useState hook
  /*
    The useState hook initializes a state variable 'count' with an initial value of 0.
    The 'setCount' function is used to update the state variable.

    0th index is a value of the state variable
    1st index is a function to update the state variable

    For ex.:
    const ans = useState(0)
    ans[0] // 0
    ans[1] // function to update the state variable

  */
  // Here we are using destructuring to get the value and the function to update the state variable
  // const [value, setValue] = useState(initialValue)
  // In this case, we are initializing the state variable 'count' with an initial value
  // of 0 and the function to update the state variable is 'setCount'.
  const [count, setCount] = useState(1);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-3 transition-all duration-200 active:bg-blue-700"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <span className="text-2xl font-bold mx-4">{count}</span>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded mt-3 transition-all duration-200 active:bg-red-700"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
    </div>
  );
}

export default App;
