import React from "react";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

function Button({ text = "Get Started", link = "#" }) {
  return (
    <>
      <button
        className={`bg-white text-black px-4 py-1 rounded-full shadow flex items-center justify-between gap-2 ${link ? "cursor-pointer" : "cursor-not-allowed opacity-50"
          }`}
        onClick={() => {
          if (link) {
            window.location.href = link;
          }
        }}
        disabled={!link}
      >
        {text} <MdOutlineSubdirectoryArrowRight />
      </button>
    </>
  );
}

export default Button;
