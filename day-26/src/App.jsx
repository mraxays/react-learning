import React from "react";
import axios from "axios";

function App() {
  const addProduct = async () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .post(api, {
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Day 26</h1>
        <p className="mt-2">Welcome to Day 26 of the challenge!</p>
        <ul>
          <li className="mt-2">- Learn how to make POST requests using Axios.</li>
          <li className="mt-2">- Understand how to send data to a server.</li>
          <li className="mt-2">- Implement a simple product addition feature.</li>
        </ul>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={addProduct}
        >
          Add Product
        </button>
      </div>
    </>
  );
}

export default App;
