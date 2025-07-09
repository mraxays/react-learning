import React from "react";

function Card() {
  return (
    <div className="max-w-sm mx-auto p-4">
      <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
        <div className="aspect-w-16 aspect-h-9">
          <img
            src="https://placehold.co/640x360?font=Montserrat&text=Card+1"
            alt="Placeholder"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mt-4">Card Title</h2>
          <p className="text-gray-700 mt-2">
            This is a description of the card content. It provides a brief
            overview of what the card is about.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
