import React from "react";
import Card from "./Card";

function Cards({ cards, handleRemoveCard }) {
  return (
    <div className="w-full flex flex-wrap justify-center items-center rounded p-3 gap-4">
      {cards.map((card, index) => {
        return <Card key={index} card={card} handleRemoveCard={handleRemoveCard} id={index} />;
      })}
    </div>
  );
}

export default Cards;
