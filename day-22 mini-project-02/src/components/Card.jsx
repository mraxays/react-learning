import React from "react";

function Card({ card, handleRemoveCard, id }) {
  return (
    <div key={id} className="w-40 h-60 p-2 bg-yellow-900 rounded flex flex-col justify-center">
      <div className="img rounded overflow-hidden w-full h-32">
        <img src={card.imageUrl} alt="" />
      </div>
      <div className="info text-white mt-2">
        <h3 className="font-bold text-lg">{card.title}</h3>
        <p className="text-xs break-all leading-none tracking-tight">
          {card.description}
        </p>
      </div>
      <button className="mt-2 bg-yellow-600 text-white border border-yellow-300 py-1 rounded text-sm active:bg-amber-400 transition-colors duration-300" onClick={() => {
        if (window.confirm("Are you sure you want to remove this card?")) {
          handleRemoveCard(id);
        }
      }}>
        Remove It
      </button>
    </div>
  );
}

export default Card;
