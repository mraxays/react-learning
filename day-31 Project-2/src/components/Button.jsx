import React from "react";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

function Button() {
  return (
    <>
      <button className="bg-white text-black px-4 py-1 rounded-full shadow flex items-center justify-between gap-2">
        Get Started <MdOutlineSubdirectoryArrowRight />
      </button>
    </>
  );
}

export default Button;
