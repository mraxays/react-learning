import { useContext, useState } from "react";
import { ProductContext } from "../context/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

function Create() {
 const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();
    if (
      title.trim().length === 0 ||
      description.trim().length === 0 ||
      category.trim().length === 0 ||
      price.trim().length === 0 ||
      imageUrl.trim().length === 0
    ) {
      alert("Please fill in all fields");
      return;
    } else if (isNaN(price) || parseFloat(price) <= 0) {
      alert("Please enter a valid price greater than 0");
      return;
    }
    const newProduct = {
      id: nanoid(),
      title,
      description,
      category,
      price: parseFloat(price),
      image: imageUrl,
      rating: {
        rate: Math.random() * 5,
        count: Math.floor(Math.random() * 1000) + 1,
      },
    };
    console.log(newProduct);
    setProducts([...products, newProduct]);
    localStorage.setItem("products", JSON.stringify([...products, newProduct]));
    setTitle("");
    setDescription("");
    setCategory("");
    setPrice("");
    setImageUrl("");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="text-xs tracking-[0.35em] uppercase text-neutral-500 mb-4">
          New Entry
        </p>
        <h1 className="text-4xl font-light text-neutral-900 tracking-tight">
          Create New Project
        </h1>
      </div>

      {/* Form */}
      <form
        onSubmit={AddProductHandler}
        className="max-w-4xl mx-auto px-6 pb-24"
      >
        <div className="bg-white rounded-3xl shadow-sm p-12 space-y-10">
          {/* Project Name */}
          <div>
            <label className="block text-xs tracking-[0.25em] uppercase text-neutral-500 mb-2">
              Project Name
            </label>
            <input
              type="text"
              placeholder="Enter project name"
              className="w-full border-b border-neutral-300 py-3 text-sm focus:outline-none focus:border-neutral-900 transition bg-transparent"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs tracking-[0.25em] uppercase text-neutral-500 mb-2">
              Description
            </label>
            <textarea
              rows="4"
              placeholder="Describe the project"
              className="w-full border-b border-neutral-300 py-3 text-sm focus:outline-none focus:border-neutral-900 transition bg-transparent resize-none"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>

          {/* Two Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Category */}
            <div>
              <label className="block text-xs tracking-[0.25em] uppercase text-neutral-500 mb-2">
                Category
              </label>
              <select
                className="w-full border-b border-neutral-300 py-3 text-sm bg-transparent focus:outline-none focus:border-neutral-900 transition"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option hidden value={""}>
                  Select category
                </option>
                <option value={"men's clothing"}>Men's Clothing</option>
                <option value={"jewelery"}>Jewelery</option>
                <option value={"electronics"}>Electronics</option>
                <option value={"women's clothing"}>Women's Clothing</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-xs tracking-[0.25em] uppercase text-neutral-500 mb-2">
                Price
              </label>
              <input
                type="number"
                placeholder="0.00"
                className="w-full border-b border-neutral-300 py-3 text-sm focus:outline-none focus:border-neutral-900 transition bg-transparent"
                step={"0.01"}
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>
          </div>

          {/* Upload */}
          <div>
            <label className="block text-xs tracking-[0.25em] uppercase text-neutral-500 mb-3">
              Img Url
            </label>
            <input
              type="url"
              placeholder="Enter image url"
              className="w-full border-b border-neutral-300 py-3 text-sm focus:outline-none focus:border-neutral-900 transition bg-transparent"
              onChange={(e) => setImageUrl(e.target.value)}
              value={imageUrl}
            />
          </div>
          {/* Actions */}
          <div className="pt-10 flex flex-col md:flex-row gap-4">
            <button
              type="submit"
              className="flex-1 bg-neutral-900 text-white py-4 rounded-full text-xs tracking-[0.3em] uppercase hover:bg-neutral-800 transition"
            >
              Create Project
            </button>
            <button
              type="button"
              className="flex-1 border border-neutral-300 text-neutral-700 py-4 rounded-full text-xs tracking-[0.3em] uppercase hover:bg-neutral-100 transition"
              onClick={() => {
                setTitle("");
                setDescription("");
                setCategory("");
                setPrice("");
                setImageUrl("");
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Create;
