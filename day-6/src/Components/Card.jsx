import React from "react";

function Card() {
  // Sample data for the songs
  // In a real application, this data might come from an API or a database.
  const data = [
    {
      title: "Jogiya Jogiya",
      artist: "Sukhwinder Singh, Anuradha Paudwal",
      duration: "03:45",
      imageUrl:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Tum Hi Ho",
      artist: "Arijit Singh",
      duration: "04:20",
      imageUrl:
        "https://images.unsplash.com/photo-1478088702756-f16754aaf0c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Function to handle download action
  // In a real application, this would trigger a download of the song file.
  const handleDownload = (title) => {
    alert(`Downloading ${title} ...`);
  };

  // Render the card component
  // Each card displays the song's image, title, artist, duration, and a download button.
  // The cards are styled with Tailwind CSS classes for a clean and modern look.
  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center gap-6">
      {data.map((elem, index) => (
        <div className="song px-3 py-2 bg-zinc-50 rounded w-56" key={index}>
          <div className="aspect-square overflow-hidden rounded">
            <img src={elem.imageUrl} className="object-cover w-full h-full" />
          </div>
          <div className="mt-2">
            <h3 className="text-sm font-semibold">{elem.title}</h3>
            <p className="text-xs text-zinc-500 line-clamp-1 mt-1">
              {elem.artist}
            </p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-zinc-500">{elem.duration}</span>
            <button
              onClick={() => handleDownload(elem.title)}
              className="text-xs text-white bg-blue-500 px-1 py-0.5 rounded hover:bg-blue-600 transition-colors"
            >
              Download
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
