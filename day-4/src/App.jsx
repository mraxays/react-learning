import React from "react";
// import Card from './components/card'

function App() {
  const data = [
    "akshat",
    "sachin",
    "sagar",
    "sahil",
    "saurabh",
    "shubham",
    "siddharth",
    "sourabh",
    "sudhir",
    "sumit",
  ];
  return (
    <div className="flex flex-wrap justify-center items-center gap-6">
      {data.map((elem, index) => (
        <div key={index} className="bg-gray-200 p-4 m-2 rounded-lg shadow-lg w-64">
          <h1 className="text-xl font-bold capitalize">{elem}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
