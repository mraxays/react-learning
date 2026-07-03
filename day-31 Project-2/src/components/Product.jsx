import React from "react";
import Button from "./Button";

function Product({
  title,
  description,
  img,
  live,
  caseStudy,
  isLive,
  isCaseStudy,
}) {
  return (
    <div className="border-t border-b py-16 px-8 w-full">
      <div className="flex gap-4 justify-between items-center mx-auto max-w-6xl">
        <h3 className="text-4xl capitalize font-semibold">{title}</h3>
        <img
          src={img}
          alt={title}
          srcset=""
          className="aspect-4/3 max-w-75 object-cover rounded-lg"
        />
        <div className="space-y-6 w-1/3">
          <p className="text-base text-zinc-500">{description}</p>
          <div className="flex gap-4 items-center ">
            {isLive && <Button text="Live Demo" link={live} />}
            {isCaseStudy && <Button text="Case Study" link={caseStudy} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
