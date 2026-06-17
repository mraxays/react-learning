import React from "react";

function Work() {
  var imgs = [
    {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      top: "50%",
      left: "50%",
      isActive: true,
    },
    {
      url: "https://images.unsplash.com/photo-1763998861274-50ad8e2a182c?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "53%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1772398901550-a0b9da0d0160?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "47%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1677773583198-46f12a6cacaa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "51%",
      left: "49%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      top: "53%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1763998861274-50ad8e2a182c?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "55%",
      left: "59%",
      isActive: false,
    },
  ];
  return (
    <div className="w-full">
      <div className="relative max-w-6xl mx-auto bg-zinc-900 text-white text-center">
        <h1 className="text-[24rem] font-medium tracking-wide select-none">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {imgs.map((img, index) => (
            <img
              key={index}
              src={img.url}
              alt={`Image ${index + 1}`}
              className={`absolute transition-all duration-500 ease-in-out transform w-48 rounded aspect-square object-cover ${img.isActive ? "scale-100" : "scale-100"} `}
              style={{ top: img.top, left: img.left }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
