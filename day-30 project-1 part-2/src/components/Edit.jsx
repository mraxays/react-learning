import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../context/Context";

function Edit() {
  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    const product = products.filter((product) => product.id == id)[0];
    setCurrentProduct(product);
  }, [id, products]);

  const {
    title,
    description,
    category,
    price,
    image: imageUrl,
  } = currentProduct;

  const EditProductHandler = (e) => {
    e.preventDefault();
    if (
      title.trim().length === 0 ||
      description.trim().length === 0 ||
      category.trim().length === 0 ||
      String(price).trim().length === 0 ||
      imageUrl.trim().length === 0
    ) {
      alert("Please fill in all fields");
      return;
    } else if (isNaN(price) || parseFloat(price) <= 0) {
      alert("Please enter a valid price greater than 0");
      return;
    }
    const updatedProduct = {
      id,
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
    const updatedProducts = products.map((product) =>
      product.id == id ? updatedProduct : product,
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="text-xs tracking-[0.35em] uppercase text-neutral-500 mb-4">
          Edit Product
        </p>
        <h1 className="text-4xl font-light text-neutral-900 tracking-tight">
          Modify Product details
        </h1>
      </div>

      {/* Form */}
      <form
        onSubmit={EditProductHandler}
        className="max-w-4xl mx-auto px-6 pb-24"
      >
        <div className="bg-white rounded-3xl shadow-sm p-12 space-y-10">
          {/* Project Name */}
          <div>
            <label className="block text-xs tracking-[0.25em] uppercase text-neutral-500 mb-2">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter product name"
              className="w-full border-b border-neutral-300 py-3 text-sm focus:outline-none focus:border-neutral-900 transition bg-transparent"
              onChange={(e) => {
                setCurrentProduct({ ...currentProduct, title: e.target.value });
              }}
              value={currentProduct.title}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs tracking-[0.25em] uppercase text-neutral-500 mb-2">
              Description
            </label>
            <textarea
              rows="4"
              placeholder="Describe the product"
              className="w-full border-b border-neutral-300 py-3 text-sm focus:outline-none focus:border-neutral-900 transition bg-transparent resize-none"
              onChange={(e) =>
                setCurrentProduct({
                  ...currentProduct,
                  description: e.target.value,
                })
              }
              value={currentProduct.description}
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
                onChange={(e) =>
                  setCurrentProduct({
                    ...currentProduct,
                    category: e.target.value,
                  })
                }
                value={currentProduct.category}
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
                onChange={(e) =>
                  setCurrentProduct({
                    ...currentProduct,
                    price: e.target.value,
                  })
                }
                value={currentProduct.price}
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
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, image: e.target.value })
              }
              value={currentProduct.image}
            />
          </div>
          {/* Actions */}
          <div className="pt-10 flex flex-col md:flex-row gap-4">
            <button
              type="submit"
              className="flex-1 bg-neutral-900 text-white py-4 rounded-full text-xs tracking-[0.3em] uppercase hover:bg-neutral-800 transition"
            >
              Update Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Edit;
