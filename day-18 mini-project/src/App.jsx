import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  /*
    Whats We Learned:
      1. Props Drilling
      2. Lifting State Up
      3. Conditional Rendering
      4. Dynamic Classes
      5. Array Manipulation in React State
      6. Key Prop in Lists
      7. Event Handling in React
      8. Controlled Components
      9. CSS Modules
  */
 
  const data = [
    {
      title: "Tum Hi Ho",
      artist: "KK",
      album: "Jannat",
      image:
        "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      added: false,
    },
    {
      title: "Kesariya",
      artist: "Arijit Singh",
      album: "Brahmastra",
      image:
        "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      added: false,
    },
    {
      title: "Let Me Love You",
      artist: "DJ Snake",
      album: "Single",
      image:
        "https://images.unsplash.com/photo-1644365978029-d14ed81d8aa5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      added: false,
    },
    {
      title: "Shape of You",
      artist: "Ed Sheeran",
      album: "Divide",
      image:
        "https://images.unsplash.com/photo-1589128995173-e1cd084b3db9?q=80&w=1185&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      added: false,
    },
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      image:
        "https://images.unsplash.com/photo-1612868922425-bc2913de5b7c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      added: false,
    },
    {
      title: "Saiyaara",
      artist: "Unknown",
      album: "Saiyaara",
      image:
        "https://images.unsplash.com/photo-1612868922126-375ea2029337?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      added: false,
    },
    {
      title: "Tum Hi Ho",
      artist: "KK",
      album: "Jannat",
      image:
        "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      added: false,
    },
    {
      title: "Kesariya",
      artist: "Arijit Singh",
      album: "Brahmastra",
      image:
        "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      added: false,
    },
    {
      title: "Let Me Love You",
      artist: "DJ Snake",
      album: "Single",
      image:
        "https://images.unsplash.com/photo-1644365978029-d14ed81d8aa5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      added: false,
    },
    {
      title: "Shape of You",
      artist: "Ed Sheeran",
      album: "Divide",
      image:
        "https://images.unsplash.com/photo-1589128995173-e1cd084b3db9?q=80&w=1185&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      added: false,
    },
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      image:
        "https://images.unsplash.com/photo-1612868922425-bc2913de5b7c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      added: false,
    },
    {
      title: "Saiyaara",
      artist: "Unknown",
      album: "Saiyaara",
      image:
        "https://images.unsplash.com/photo-1612868922126-375ea2029337?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      added: false,
    },
  ];
  const [val, setVal] = useState(data);
  const handleAdded = (index) => {
    // alert("Hey I'm " + index);
    setVal((prev)=>{
      return prev.map((item, itemIDX)=>{
        if(itemIDX === index) return {
          ...item, added: !item.added
        }
        return item;
      })
    })
  };
  return (
    <div className="w-full p-4 min-h-screen bg-gray-200">
      <Navbar data={val} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4 lg:px-10">
        {val.map((item, idx) => (
          <Card data={item} index={idx} handleAdded={handleAdded} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default App;
