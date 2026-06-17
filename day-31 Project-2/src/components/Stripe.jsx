import React from "react";

function Stripe({ url, number }) {
  return (
    <div className="w-[16.66%] flex items-center justify-between p-4 border border-gray-700">
      <img src={url} alt="Stripe" className="w-30 h-8 object-contain invert" />
        <span className="ml-4 text-lg text-white font-bold">{number}</span>
    </div>
  );
}

export default Stripe;
