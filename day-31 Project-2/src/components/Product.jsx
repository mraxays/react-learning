import React from "react";

function Product() {
  return (
    <div className="border-t border-b py-4 px-8 w-full">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-zinc-700"></div>
        <div>
          <h3 className="text-lg font-bold">Product Name</h3>
          <p className="text-sm text-zinc-500">
            Product description goes here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
