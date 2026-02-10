import { useContext } from "react";
import { ProductContext } from "../context/Context";
import { Link, useLocation } from "react-router-dom";

function SideBar() {
  const params = useLocation();
  const queryParams = new URLSearchParams(params.search).get("category");
  const [product] = useContext(ProductContext);
  const uniqueCategories = [...new Set(product.map((item) => item.category))];
  return (
    <aside className="w-1/4 bg-neutral-50 border-r border-neutral-200 px-6 py-8">
      {/* <div className="space-y-3 mb-8">
        <Link to="/" className="w-full block text-center border border-neutral-300 text-neutral-700 py-3 rounded-full text-xs tracking-widest uppercase hover:bg-neutral-100 transition">
          Clear Filters
        </Link>
      </div> */}

      {/* Filter Title */}
      <div className="flex mb-6">
        <h2 className="text-sm tracking-[0.3em] uppercase text-neutral-500  font-semibold">
          Categories
        </h2>
        {queryParams && (
          <Link
            to="/"
            className="ml-auto text-xs bg-black text-neutral-50 hover:text-neutral-300 transition border border-white px-2 py-0.5 rounded-full"
          >
            Clear
          </Link>
        )}
      </div>

      {/* Filters */}
      <ul className="space-y-4">
        {uniqueCategories.map((category, index) => {
          return (
            <li key={index} className="flex items-center gap-3">
              <span
                className={`w-3 h-3 border ${queryParams == category ? "bg-black/70" : ""}`}
              ></span>
              <Link
                to={`?category=${category}`}
                className={`text-sm font-light text-neutral-800 cursor-pointer peer-checked:font-medium uppercase tracking-wide transition ${queryParams == category ? "font-medium" : ""}`}
              >
                {category}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default SideBar;
