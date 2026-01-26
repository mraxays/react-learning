import { React, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .get(api)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Day 27</h1>
        <p className="mt-2">Welcome to Day 27 of the challenge!</p>
        <ul>
          <li className="mt-2">- Learn how to make GET requests using Axios.</li>
          <li className="mt-2">- Understand how to fetch data from a server.</li>
          <li className="mt-2">- Display a list of products fetched from an API.</li>
        </ul>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={fetchData}
        >
          Fetch Data
        </button>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="rounded-lg border border-gray-200 p-4 shadow-sm"
              >
                <div className="h-48 w-full rounded bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain"
                    loading="eager"
                  />
                </div>
                <h2 className="mt-3 text-lg font-semibold">{product.title}</h2>
                <p className="mt-1 text-sm text-gray-600">${product.price}</p>
                <button className="mt-3 rounded bg-blue-500 px-3 py-1 text-white">
                  View
                </button>
              </div>
            ))
          ) : (
            <div className="mt-4 text-center">No products available.</div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
