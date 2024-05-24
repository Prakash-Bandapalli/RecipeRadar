/* eslint-disable react/prop-types */

import { useState } from "react";

//import { useState } from "react";

function ReceipeContainer({ image, name, list }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }
  return (
    <div className="relative max-w-80 flex flex-col justify-center items-center  pt-3 duration-200 rounded-lg shadow-xl bg-white hover:scale-105 border-2 border-gray-400 hover:border-gray-600">
      <div>
        <img src={image} />
      </div>
      <h2 className="font-bold text-2xl my-4 text-center">{name}</h2>
      <button
        onClick={handleOpen}
        className="mb-5 p-4 px-20 bg-green-300 font-semibold rounded-md hover:bg-green-400 hover:-translate-y-0.5 hover:shadow-md duration-200"
      >
        Ingredients
      </button>
      {isOpen && (
        <div className="absolute inset-0 bg-black/90 overflow-y-auto rounded-md">
          <div className="relative">
            <div className="flex justify-between text-white p-4 pt-9">
              <h2 className="text-xl font-bold">
                Ingredients<span>🍅</span>
              </h2>
              <h2 className="text-xl font-bold">
                Weight<span>⚖️</span>
              </h2>
            </div>
            {list.map((obj, i) => (
              <div
                key={i}
                className="flex justify-between items-center text-white p-4 px-6"
              >
                <p className="max-w-40">{obj.text}</p>
                <p className="font-bold">{obj.weight.toFixed(2)}</p>
              </div>
            ))}
            <button
              onClick={handleClose}
              className="absolute w-10 h-10 bg-gray-400 rounded-full text-white top-0 right-2 hover:bg-gray-500"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default ReceipeContainer;
