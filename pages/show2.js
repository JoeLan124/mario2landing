import React from "react";
import { useState } from "react";

function show() {
  const [isShown, setIsShown] = useState(false);
  const [showMenue, setShowMenue] = useState(false);
  return (
    <div>
      <nav className="flex flex-col w-full items-center mt-2 border-1 border-blue-200 bg-blue-400">
        <div className="flex flex-row justify-between w-full p-4">
          <ul className="">Logo</ul>
          <svg
            onClick={() => setShowMenue(!showMenue)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        {showMenue && (
          <div className="space-y-4 bg-blue-600 w-full text-center rounded-lg">
            <ul>Link 1</ul>
            <ul
              className="relative"
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
                <div className=" bg-blue-700 rounded-lg">
                  <ul className="">
                    <a href="/">
                      <span>Link A</span>
                    </a>
                  </ul>
                  <ul className="">
                    <a href="/">Link B</a>
                  </ul>
                  <ul className="">Link C</ul>
                </div>
              )}
            </ul>
            <ul>Link 3</ul>
          </div>
        )}
      </nav>
      <section className="bg-white h-screen"></section>
    </div>
  );
}

export default show;
