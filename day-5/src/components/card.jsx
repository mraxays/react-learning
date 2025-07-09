import React from "react";

function Card() {
  const data = [
    {
      img: "https://placehold.co/640x360?font=Montserrat&text=Card+1",
      title: "Card 1",
      description: "This is the description for Card 1.",
      inStock: true,
    },
    {
      img: "https://placehold.co/640x360?font=Montserrat&text=Card+2",
      title: "Card 2",
      description: "This is the description for Card 2.",
      inStock: false,
    },
    {
      img: "https://placehold.co/640x360?font=Montserrat&text=Card+3",
      title: "Card 3",
      description: "This is the description for Card 3.",
      inStock: false,
    },
  ];

  return (
    <div className="mx-auto p-4 flex gap-4 flex-wrap">
      {data.map((elem, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-lg shadow-md overflow-hidden w-80"
        >
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={elem.img}
              alt="Placeholder"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mt-4">{elem.title}</h2>
            <p className="text-gray-700 mt-2 line-clamp-3">
              {elem.description}
            </p>
          </div>
          <div className="p-4">
            <button className={`${ elem.inStock ? "bg-blue-500" : "bg-gray-400 cursor-not-allowed"} hover:opacity-90 text-white px-4 py-2 rounded transition-colors`} disabled={!elem.inStock}>
              {elem.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
