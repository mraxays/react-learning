import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetProducts } from "../actions/ProductActions";

function Products() {
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetProducts());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <section className="border-b border-white/10 bg-linear-to-b from-neutral-900 to-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-indigo-400">
              Our Collection
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Explore our
              <span className="text-indigo-400"> products.</span>
            </h1>

            <p className="mt-5 text-base leading-7 text-neutral-400 sm:text-lg">
              Discover carefully selected products designed to make your
              everyday experience better.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {products.length === 0 ? (
          <div className="flex min-h-100 items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-900 text-2xl">
                📦
              </div>

              <h2 className="text-xl font-semibold">
                No products found
              </h2>

              <p className="mt-2 text-sm text-neutral-500">
                There are currently no products available.
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Results header */}
            <div className="mb-8 flex items-center justify-between">
              <p className="text-sm text-neutral-400">
                Showing{" "}
                <span className="font-semibold text-white">
                  {products.length}
                </span>{" "}
                products
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-indigo-500/10"
                >
                  {/* Image */}
                  <div className="relative flex h-56 items-center justify-center overflow-hidden bg-neutral-800">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="text-5xl text-neutral-600">
                        🛍️
                      </div>
                    )}

                    {/* Badge */}
                    <span className="absolute left-3 top-3 rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                      Featured
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <h2 className="text-lg font-semibold tracking-tight text-white transition group-hover:text-indigo-400">
                        {product.name}
                      </h2>

                      <button className="text-neutral-500 transition hover:text-white">
                        ♡
                      </button>
                    </div>

                    <p className="mb-4 line-clamp-2 text-sm leading-6 text-neutral-400">
                      {product.description}
                    </p>

                    {/* Rating */}
                    <div className="mb-5 flex items-center gap-2">
                      <div className="flex text-yellow-400">
                        ★★★★★
                      </div>
                      <span className="text-xs text-neutral-500">
                        (4.8)
                      </span>
                    </div>

                    {/* Bottom */}
                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                      <div>
                        <p className="text-xs text-neutral-500">
                          Price
                        </p>

                        <p className="text-xl font-bold text-white">
                          ₹{product.price || "—"}
                        </p>
                      </div>

                      <button className="rounded-xl bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-400 active:scale-95">
                        View Product
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default Products;