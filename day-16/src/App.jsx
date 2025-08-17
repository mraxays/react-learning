import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function App() {
  const [val, setVal] = useState(false);

  return (
    <div className="p-4 flex justify-center items-center h-screen bg-gray-100">
      <div className="w-sm flex rounded relative shadow-2xl border-3 border-gray-300 overflow-hidden">
        <img
          className={`object-center object-cover shrink-0 w-sm aspect-video transition-transform duration-500 ${val ? "translate-x-0" : "-translate-x-full"}`}
          src="https://images.unsplash.com/photo-1717496002081-38a90d3cba26?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={`object-center object-cover shrink-0 w-sm aspect-video transition-transform duration-500 ${val ? "translate-x-0" : "-translate-x-full"}`}
          src="https://images.unsplash.com/photo-1548620110-57bb51e9d2ef?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div onClick={()=>setVal(()=>!val)} className="absolute inset-0 flex items-center justify-center text-black text-4xl transition hover:bg-amber-200/10 hover:text-amber-900">
          <span className="rounded-full bg-white p-1 shadow-lg">
            <FaRegArrowAltCircleRight />
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
