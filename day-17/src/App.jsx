import React, { useState } from "react";
import Card from "./components/Card"; // Props

function App() {
  /*
    <Card /> ------ Props Are Use for Reusable Components
    Props are used to pass data from a parent component to a child component.

    Consider the I Want to create a button for use multiple times in this application that time i will create a reusable component and pass the data using props.
    like <Card text="Batch 1" color="bg-red-500"/>

      and in the Card component, I can access these props like this:

      function Card({ text, color }) {
        return (
          <button className={`${color} text-white px-2 py-1 rounded shadow`}>{text}</button>
        )
      }

  */

  const cardData = [
    {
      imgSrc:
        "https://placehold.co/300/FF00FF/FFFFFF/png?text=App+Development&font=Roboto",
      title: "App Development",
      description: "This is the description for App Development",
      enroll: false,
    },
    {
      imgSrc:
        "https://placehold.co/300/00DD00/FFFFFF/png?text=Web+Development&font=Roboto",
      title: "Web Development",
      description: "This is the description for Web Development",
      enroll: false,
    },
    {
      imgSrc:
        "https://placehold.co/300/0000DD/FFFFFF/png?text=Data+Science&font=Roboto",
      title: "Data Science",
      description: "This is the description for Data Science",
      enroll: false,
    },
    {
      imgSrc:
        "https://placehold.co/300/DD0000/FFFFFF/png?text=Machine+Learning&font=Roboto",
      title: "Machine Learning",
      description: "This is the description for Machine Learning",
      enroll: false,
    },
  ];
  const [cards, setCards] = useState(cardData);
  // State Jaha Banti hai vaha Modify ki jaa sakati hai
  const handleCards = (idx) => {
    setCards((prev) => {
     return prev.map((item, index) => {
        if (index === idx) {
          return { ...item, enroll: !item.enroll };
        }
        return item;
      });
    });
  };

  return (
    // <div className="p-4 space-x-2">
    //   <Card text="Batch 1" color="bg-red-500" />
    //   <Card text="Batch 2" color="bg-blue-500" />
    //   <Card text="Batch 3" color="bg-green-500" />
    //   <Card text="Batch 4" color="bg-yellow-500" />
    // </div>
    <div className="w-full flex items-center justify-center h-screen bg-gray-200 gap-2">
      {cards.map((element, index) => (
        <Card key={index} index={index} handleClick={handleCards} value={element} />
      ))}
    </div>
  );
}

export default App;
