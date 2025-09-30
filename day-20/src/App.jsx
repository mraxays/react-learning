import React, { useRef } from "react";

function App() {
  const name = useRef(null);
  const age = useRef(null);

  const hidleSubmit = (event) => {
    event.preventDefault();
    alert("Form Submit => Name : " + name.current.value + " Age : " + age.current.value)
  };

  return (
    <div className="p-5">
      <form className="space-x-2" action="" onSubmit={hidleSubmit}>
        <input
          ref={name}
          className="border px-2 py-1 rounded"
          type="text"
          placeholder="Name"
        />
        <input
          ref={age}
          className="border px-2 py-1 rounded"
          type="number"
          placeholder="Age"
        />
        <button
          className="px-2 py-1 bg-amber-600 hover:bg-amber-800 text-white rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
