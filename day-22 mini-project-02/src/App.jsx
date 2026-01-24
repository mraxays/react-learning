import React, { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {
  const [cards, setCards] = useState([]);

  const handleFormSubmitData = (data) => {
    // setCards([...cards, {imageUrl: data.imageUrl, title: data.title, description: data.description}]);
    setCards([...cards, data]);
  };
  const handleRemoveCard = (id) => {
    setCards(()=>cards.filter((card, index) => index !== id));
  }
  return (
    <div className="flex justify-center items-center min-h-screen flex-col bg-slate-100">
      <div className="container mx-auto p-4">
        <Cards cards={cards} handleRemoveCard={handleRemoveCard} />
        <Form handleFormSubmitData={handleFormSubmitData} />
      </div>
    </div>
  );
}

export default App;
