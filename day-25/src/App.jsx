import React from 'react'
import axios from 'axios'

function App() {
  const fetchData = async () => {
   const api = "https://fakestoreapi.com/products";

   axios.get(api)
     .then((response) => {
       console.log(response.data);
     })
     .catch((error) => {
       console.error("Error fetching data:", error);
     });
  }
  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Day 25</h1>
        <p className="mt-2">Welcome to Day 25 of the challenge!</p>
        <p>
          Today we are learning how to make API calls using Axios in a React
          application.
        </p>
        <ul>
          <li className="mt-2">1. Install Axios via npm or yarn.</li>
          <li className="mt-2">
            2. Import Axios in your React component.
          </li>
          <li className="mt-2">3. Use Axios to fetch data from an API endpoint.</li>
          <li className="mt-2">4. Handle the response and errors appropriately.</li>

        </ul>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={fetchData}
        >
          Fetch Data
        </button>
      </div>
    </>
  )
}

export default App