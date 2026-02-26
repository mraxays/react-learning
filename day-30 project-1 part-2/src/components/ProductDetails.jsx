import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../context/Context";
import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";

function ProductDetails() {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [product, setProduct] = useState();
  const { id } = useParams();
  // const getSingleProduct = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     setProduct(data);
  //   } catch (error) {
  //     console.error("Error fetching product details:", error);
  //   }
  // };

  useEffect(() => {
    // getSingleProduct();
    const foundProduct = products.find((item) => item.id.toString() === id);
    setProduct(foundProduct);
  }, [id, products]);

  const ProductDeleteHandler = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      const updatedProducts = products.filter((item) => item.id.toString() !== id);
      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      navigate("/");
    }
  };
  return product ? (
    <div className="min-h-screen bg-neutral-100">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 pt-8 text-xs tracking-wide text-neutral-500 uppercase">
        <Link to="/">Home</Link> /{" "}
        <Link to={`/?category=${product.category}`}>{product.category}</Link> /
        Product
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Image Section */}
        <div className="space-y-6">
          <div className="aspect-square bg-white rounded-3xl shadow-sm flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-contain p-10"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between">
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-[11px] tracking-[0.2em] uppercase text-neutral-500">
                Limited Edition
              </span>
              <h1 className="text-5xl font-light tracking-tight text-neutral-900">
                {product.title}
              </h1>
              <div className="flex items-center gap-3 text-sm text-neutral-500">
                {/* Product Rating Rate show in number conver in star */}
                <span className="tracking-wide">
                  {product.rating?.rate.toFixed(1)} ★
                </span>
                <span>( {product.rating?.count} Reviews)</span>
              </div>
            </div>
            <p className="text-3xl font-medium text-neutral-900">
              ${product.price}
            </p>

            <p className="text-neutral-600 leading-relaxed max-w-xl">
              {product.description}
            </p>

            {/* Options */}
            {/* <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center border border-neutral-300 rounded-full px-4 py-2 text-sm">
                  <button className="px-3">−</button>
                  <span className="px-4">1</span>
                  <button className="px-3">+</button>
                </div>
              </div>
            </div> */}
          </div>

          {/* Actions */}
          <div className="space-y-4 pt-10">
            <Link to={`/edit/${product.id}`} className="w-full block bg-neutral-900 text-white py-4 rounded-full text-sm tracking-wide text-center hover:bg-neutral-800 transition cursor-pointer">
              Edit Product
            </Link>
            <button onClick={ProductDeleteHandler} className="w-full border border-neutral-900 text-neutral-900 py-4 rounded-full text-sm tracking-wide hover:bg-neutral-200 transition cursor-pointer">
              Delete Product
            </button>
            <div className="flex justify-between text-xs text-neutral-500 pt-4">
              <span>Free Worldwide Shipping</span>
              <span>30-Day Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-3xl p-12 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-2">
              Materials
            </h3>
            <p className="text-neutral-700">
              Full-grain leather, brushed steel
            </p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-2">
              Craftsmanship
            </h3>
            <p className="text-neutral-700">Hand-finished by master artisans</p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-2">
              Warranty
            </h3>
            <p className="text-neutral-700">2-year international warranty</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default ProductDetails;
