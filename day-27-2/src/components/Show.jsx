import { React, useEffect, useState } from "react";
import axios from "axios";
function Show() {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .get(api)
      .then((response) => {
        // console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
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
        <p>Loading products...</p>
      )}
    </div>
  );
}

export default Show;
