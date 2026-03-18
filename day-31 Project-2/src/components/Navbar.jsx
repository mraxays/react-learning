import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-6xl mx-auto h-16 bg-zinc-800 border-b border-zinc-600 text-white px-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <a href="#" className="tracking-wider uppercase">
          My App
        </a>
        <div className="flex space-x-5 ml-10 ">
          {["Home", "Work", "Culture", "", "News"].map((item, index) =>
            item.length === 0 ? (
              <span key={index} className="w-0.5 h-6 bg-zinc-600"></span>
            ) : (
              <a
                key={index}
                href="#"
                className="hover:text-zinc-400 transition text-sm flex items-center"
              >
                {index === 1 ? (
                  <span className="inline-block w-1.5 h-1.5 bg-green-500 shadow shadow-green-500 animate-pulse rounded-full mr-2 "></span>
                ) : null}
                {item}
              </a>
            ),
          )}
        </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;
