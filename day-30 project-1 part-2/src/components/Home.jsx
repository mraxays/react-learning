import { Link, useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/Context";
import Loading from "./Loading";

function Home() {
  const [products, setProducts] = useContext(ProductContext);
  const params = useLocation();
  const queryParams = new URLSearchParams(params.search).get("category");
  const [filteredProduct, setFilteredProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      if (queryParams) {
        try {
          const filtered = products.filter((item) => item.category === queryParams);
          setFilteredProduct(filtered);
        } catch (error) {
          console.error("Error fetching filtered products:", error);
        }
      } else {
        setFilteredProduct(products);
      }
    };

    fetchProducts();
  }, [queryParams, products]);


  return filteredProduct ? (
    <div className="flex min-h-screen justify-center">
      <SideBar />
      <div className="w-full md:w-3/4 p-4">
        <h1 className="uppercase tracking-[0.25em] text-neutral-500 font-semibold mb-4 ">
          Product List
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {filteredProduct.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              className="group block rounded-2xl bg-white p-5 transition-all duration-300 hover:shadow-lg border border-neutral-200 hover:border-neutral-400"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-xl bg-neutral-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 space-y-2">
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  {item.category}
                </p>
                <h2 className="text-base font-light tracking-wide text-neutral-900 line-clamp-2">
                  {item.title}
                </h2>
                <p className="text-sm font-medium text-neutral-800">
                  ${item.price}
                </p>
              </div>
              <div className="mt-4">
                <span className="inline-block text-xs uppercase tracking-[0.25em] text-neutral-500 group-hover:text-neutral-900 transition">
                  View Product →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Home;
