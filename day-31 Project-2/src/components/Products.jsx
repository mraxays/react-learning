import React from "react";
import Product from "./product";

function Products() {
  var products = [
    {
      title: "Product 1",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://placehold.co/400x300/",
      isLive: true,
      live: "https://example.com/product1",
      isCaseStudy: true,
      caseStudy: "https://example.com/case-study1",

    },
    {
      title: "Product 2",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://placehold.co/400x300/",
      isLive: true,
      live: "https://example.com/product1",
      isCaseStudy: false,
      caseStudy: "https://example.com/case-study1",
    },
    {
      title: "Product 3",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://placehold.co/400x300/",
      isLive: false,
      isCaseStudy: true,
      live: "https://example.com/product1",
      caseStudy: "https://example.com/case-study1",
    },
  ];
  return (
    <div className="mt-30">
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </div>
  );
}

export default Products;
