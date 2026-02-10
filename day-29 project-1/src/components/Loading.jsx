import React from "react";

function Loading() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-neutral-100">
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-2 border-neutral-300" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-neutral-900 animate-spin [animation-duration:1.2s]" />
      </div>
    </div>
  );
}

export default Loading;
