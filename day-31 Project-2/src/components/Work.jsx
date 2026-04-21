import React from "react";

function Work() {
  return (
    <div className="w-full h-full bg-zinc-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-[25rem] font-medium tracking-wide ">work</h1>
      <div className="flex items-center justify-center gap-12 border-2 border-zinc-700 w-full">
        <div className="flex items-center justify-center gap-8 border-r-2 border-zinc-700 pr-8 py-2 px-2">
          <span className="text-xl font-medium tracking-widest">HTML</span>
          <span className="text-lg">40</span>
        </div>
        <div className="flex items-center justify-center gap-8 border-r-2 border-zinc-700 pr-8 py-2 px-2">
          <span className="text-xl font-medium tracking-widest">CSS</span>
          <span className="text-lg">40</span>
        </div>
        <div className="flex items-center justify-center gap-8 border-r-2 border-zinc-700 pr-8 py-2 px-2">
          <span className="text-xl font-medium tracking-widest">
            JavaScript
          </span>
          <span className="text-lg">40</span>
        </div>
        <div className="flex items-center justify-center gap-8 border-r-2 border-zinc-700 pr-8 py-2 px-2">
          <span className="text-xl font-medium tracking-widest">React</span>
          <span className="text-lg">40</span>
        </div>
        <div className="flex items-center justify-center gap-8 border-r-2 border-zinc-700 pr-8 py-2 px-2">
          <span className="text-xl font-medium tracking-widest">Python</span>
          <span className="text-lg">40</span>
        </div>
        <div className="flex items-center justify-center gap-8 border-r-2 border-zinc-700 pr-8 py-2 px-2">
          <span className="text-xl font-medium tracking-widest">Django</span>
          <span className="text-lg">40</span>
        </div>
        <div className="flex items-center justify-center gap-8  pr-8 py-2 px-2">
          <span className="text-xl font-medium tracking-widest">Node JS</span>
          <span className="text-lg">40</span>
        </div>
      </div>
    </div>
  );
}

export default Work;
