import React from "react";
import { useForm } from "react-hook-form"
function App() {
  // react-hook-form form submiting
  const {register, handleSubmit} = useForm();
  return (
    <div className="p-5">
      <form className="space-x-2" action="" onSubmit={handleSubmit(data => console.log(data))}>
        <input
          className="border px-2 py-1 rounded"
          type="text"
          placeholder="Name"
          {...register("name")}
        />
        <input
          className="border px-2 py-1 rounded"
          type="number"
          placeholder="Age"
          {...register("age")}
        />
        <button
          className="px-2 py-1 bg-amber-600 hover:bg-amber-800 text-white rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
