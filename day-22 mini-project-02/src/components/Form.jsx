import React from "react";
import { useForm } from "react-hook-form";

function Form({ handleFormSubmitData }) {
  const { register, handleSubmit, reset } = useForm();
  const handleFormSubmit = (data) => {
    handleFormSubmitData(data);
    reset();
  };
  return (
    <form
      className="mt-6 rounded p-3 flex flex-col justify-center gap-3 w-80 mx-auto"
      onSubmit={handleSubmit((data) => handleFormSubmit(data))}
    >
      <input
        type="text"
        placeholder="Image URL"
        className="px-2 py-1 rounded border border-gray-400 bg-white/90 focus:outline-none"
        {...register("imageUrl")}
      />
      <input
        type="text"
        placeholder="Title"
        className="px-2 py-1 rounded border border-gray-400 bg-white/90 focus:outline-none"
        {...register("title")}
      />
      <textarea
        placeholder="Description"
        rows={2}
        className="px-2 py-1 rounded border border-gray-400 bg-white/90 focus:outline-none"
        {...register("description")}
      ></textarea>
      <button className="bg-sky-500 text-white py-1 rounded active:bg-sky-700 transition-colors duration-300">
        Add Card
      </button>
    </form>
  );
}

export default Form;
