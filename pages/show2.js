import React from "react";
import { useState } from "react";

export default function show() {
  const [isShowHamburger, setShowHamburger] =
    useState(false);
  const [showMenue, setShowMenue] = useState(false);
  const [showDrop, setShowDrop] = useState(false);
  return (
    <div>
      <nav className="flex flex-col md:flex-row w-full items-center mt-2 border-1 border-blue-200 bg-blue-400">
        <div className="flex flex-row justify-between w-full p-4">
          <ul className="">Logo</ul>
          <div className="flex space-x-4">
            <ul className="hidden md:flex">link A</ul>
            <ul className="hidden md:flex">link B</ul>
            <ul className="hidden md:flex">link C</ul>
            <svg
              onClick={() => setShowMenue(!showMenue)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 md:hidden">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        {/* mobile View */}
        {showMenue && (
          <div className="md:flex md:flex-row md:space-y-0 md:space-x-4 space-y-4 bg-blue-600 md:bg-blue-400 w-full rounded-lg pl-[45%] md:justify-end md:absolute">
            <ul className="w-auto">Link 1</ul>
            <ul
              className="relative"
              // onMouseEnter={() => setIsShown(true)}
              // onMouseLeave={() => setIsShown(false)}
              onClick={() => setShowDrop(!showDrop)}>
              {/* dropdown */}
              {!showDrop ? (
                <div className="w-auto">
                  <span className="w-full text-center flex flex-row justify-start">
                    Link 2
                    <svg
                      className=""
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </div>
              ) : (
                <span className="w-full underline text-center flex flex-row justify-start">
                  Link 2
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </span>
              )}
              {/* dropdown */}
              {showDrop && (
                <div className="rounded-lg">
                  <ul className="my-2">
                    <a href="/">
                      <span>Link A</span>
                    </a>
                  </ul>
                  <ul className="mb-2">
                    <a href="/">Link B</a>
                  </ul>
                  <ul className="mb-6">Link C</ul>
                </div>
              )}
            </ul>
            <ul>Link 3</ul>
          </div>
        )}
        {/* mobile View */}
      </nav>

      <section className="bg-white h-screen"></section>
    </div>
  );
}
