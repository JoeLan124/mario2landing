import React from "react";
import { useState } from "react";

function show() {
  const [isShown, setIsShown] = useState(false);
  return (
    <div>
      <nav className="flex flex-col md:flex-row md:justify-between h-auto  bg-blue-400">
        <div>
          <ul className="md:ml-4">Logo</ul>
        </div>
        <div className="flex  space-y-4 md:space-x-4 md:mr-24 justify-center  ">
          <ul>Link 1</ul>
          <ul
            className="relative w-full flex flex-col justify-center items-center md:w-auto"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            onClick={() => setIsShown(!isShown)}>
            {!isShown ? (
              <span className="w-full text-center">
                Link 2
              </span>
            ) : (
              <span className="w-full underline text-center">
                Link 2
              </span>
            )}
            {isShown && (
              <div className="md:absolute bg-blue-700 rounded-lg  md:-ml-4">
                <ul className="px-3 pt-2 w-full md:w-24 break-all">
                  <a href="/">
                    <span>Link A</span>
                  </a>
                </ul>
                <ul className="px-3 pt-2 w-full">
                  <a href="/">Link B</a>
                </ul>
                <ul className="px-3 pt-2 w-full">Link C</ul>
              </div>
            )}
          </ul>
          <ul>Link 3</ul>
        </div>
      </nav>
    </div>
  );
}

export default show;
