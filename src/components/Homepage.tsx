import React from "react";

function Homepage() {
  return (
    <main className="w-full h-screen p-2">
      <div className="flex justify-center">screen</div>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 w-full gap-[20px]">
          <div className="flex justify-center items-center">
            <button className="topCalculas text">AC</button>
          </div>
          <div className="flex justify-center items-center">
            <button className="topCalculas text">-/+</button>
          </div>
          <div className="flex justify-center items-center">
            <button className="topCalculas text">%</button>
          </div>
          <div className="flex justify-center items-center">
            <button className="leftCalculas text">/</button>
          </div>
          <div className="flex justify-center items-center">
            <button className="calculas text">7</button>
          </div>
          <div className="flex justify-center items-center">
            <button className="calculas text">8</button>
          </div>
          <div className="flex justify-center items-center">
            <button className="calculas text">9</button>
          </div>
          <div className="flex justify-center items-center">
            <button className="leftCalculas text">X</button>
          </div>
          <div className="flex justify-center items-center">
            <button className="calculas text">4</button>
          </div>
          <div className="flex justify-center items-center">
            <button className="calculas text">5</button>
          </div>
          <div className="flex justify-center items-center">
            <button className="calculas text">6</button>
          </div>
          <div className="flex justify-center items-center">
            <button className="leftCalculas text">-</button>
          </div>
          <div className="flex justify-center items-center">
            <button className="calculas text">1</button>
          </div>
          <div className="flex justify-center items-center">
            <button className="calculas text">2</button>
          </div>
          <div className="flex justify-center items-center">
            <button className="calculas text">3</button>
          </div>
          <div className="flex justify-center items-center">
            <button className="leftCalculas text">+</button>
          </div>
          <div className="flex justify-center items-center col-span-2">
            <button className="calculasZero text">0</button>
          </div>
          <div className="flex justify-center items-center">
            <button className="calculas text">.</button>
          </div>
          <div className="flex justify-center items-center">
            <button className="leftCalculas text">=</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Homepage;
