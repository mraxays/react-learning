import React from "react";

// function Card({ text, color }) {
//   return (
//      <button className={`${color} text-white px-2 py-1 rounded shadow`}>{text}</button>
//   )
// }
function Card({ value }) {
  const { imgSrc, title, description } = value;
  return (
    <div className="w-60 bg-white border border-gray-400 rounded shadow overflow-hidden flex items-center justify-center">
      <div className="">
        <img src={imgSrc} className="aspect-video w-full object-cover object-center" alt="" />
        <div className="p-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
          <button onClick={() => alert(`Learn more about ${title}`)} className="bg-blue-500 text-white px-2 py-1 text-sm rounded shadow mt-2">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
