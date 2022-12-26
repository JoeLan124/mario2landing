import React from "react";
import Image from "next/image";
import { useState } from "react";

function test() {
  const [showMenue, setShowMenue] = useState(false);
  const [showDrop1, setShowDrop1] = useState(false);
  const [showDrop2, setShowDrop2] = useState(false);
  const [showDrop3, setShowDrop3] = useState(false);
  const [showDrop4, setShowDrop4] = useState(false);
  return (
    <div>
      <div className="h-[400vh] bg-green-500">
        <div className="flex md:justify-between items-center first-letter:p-4 bg-white pl-4 md:pr-36 mt-0 space-x-4 sticky top-0 shadow-xl">
          <Image
            className="flex items-center hover:cursor-pointer mt-0 z-50 select-none"
            height={100}
            width={175}
            src={"/src/image.png"}
            alt={"logo"}
          />
          <div className="md:hidden flex text-lg text-[#4c7298] justify-end items-center h-full w-full pr-8">
            {/* hamburger / menu icon */}
            <svg
              onClick={() => setShowMenue(!showMenue)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div>

          {/* Links MD*/}
          <div className=" hidden md:flex md:flex-row md:space-x-8 text-lg text-[#4c7298]">
            {/* Link 1 */}
            <div className="cursor-pointer group relative ">
              <h1 className="group w-auto inline">Start</h1>
              <div className="md:absolute top-6 hidden group-hover:block hover:block w-24"></div>
            </div>
            {/* Link 2 */}
            <div className="cursor-pointer group relative text-lg">
              <h1 className="group w-auto inline">
                Wissen
              </h1>
              <div className="absolute top-6 hidden group-hover:md:block hover:md:block w-auto">
                <div className="py-3">
                  <div className="w-4 h-4 left-3 absolute top-10  bg-white rotate-45" />
                </div>
                <div className="mt-6 p-5 grid grid-cols-1 bg-white text-[#4c7298] w-24 divide-y divide-solid">
                  <ul>Notfall-Infos</ul>
                  <ul>Blog</ul>
                </div>
              </div>
            </div>
            {/* Link 3 */}
            <div className="cursor-pointer group relative ">
              <h1 className="group w-auto inline">
                Honorar
              </h1>
              <div className="md:absolute top-6 hidden group-hover:block hover:block w-24"></div>
            </div>
            {/* Link 4 */}
            <div>
              <div className="cursor-pointer group relative">
                <h1 className="group w-auto inline">
                  Angebot
                </h1>
                <div className="absolute top-6 hidden group-hover:md:block hover:md:block w-auto">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute top-10 bg-white rotate-45" />
                  </div>
                  <div className="mt-6 p-5 grid grid-cols-1 bg-white text-[#4c7298] w-48 text-left divide-y divide-solid">
                    <ul>Übersicht</ul>
                    <ul>Klopfen gegen Angst</ul>
                    <ul>Unterstützer-Rettungsring</ul>
                    <ul>Naturcoaching Selbstführung</ul>
                    <ul>Coaching</ul>
                    <ul>
                      piKVT kognitive Verhaltenstherapie
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Link 5 */}
            <div className="cursor-pointer group relative">
              <h1 className="group w-auto inline">
                Über...
              </h1>
              <div className="absolute top-6 hidden group-hover:md:block hover:md:block w-auto">
                <div className="py-3">
                  <div className="w-4 h-4 left-3 absolute top-10 bg-white rotate-45" />
                </div>
                <div className="mt-6 p-5 grid grid-cols-1 bg-white text-[#4c7298] w-24 text-left divide-y divide-solid">
                  <ul>...Sie</ul>
                  <ul>...mich</ul>
                </div>
              </div>
            </div>
            {/* Link 6 */}
            <div className="cursor-pointer group relative">
              <h1 className="group w-auto inline">
                Kontakt
              </h1>
              <div className="absolute top-6 hidden group-hover:md:block hover:md:block w-auto">
                <div className="py-3">
                  <div className="w-4 h-4 left-3 absolute top-10 bg-white rotate-45" />
                </div>
                <div className="mt-6 p-5 grid grid-cols-1 bg-white text-[#4c7298] w-36 text-left divide-y divide-solid">
                  <ul>Datenschutz persönlich</ul>
                  <ul>Datenschutz juristisch</ul>
                  <ul>Impressum</ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Links mobile view */}
        {showMenue && (
          <div className="flex flex-col md:hidden w-full md:space-y-0 md:space-x-4 space-y-4 rounded-lg pl-20 text-[#4c7298] select-none">
            {/* link without dropdown */}
            <ul className="w-auto mt-4">Start</ul>
            {/* link with dropdown1 */}
            <ul
              className="relative"
              onClick={() => setShowDrop1(!showDrop1)}>
              {/* dropdown */}
              {!showDrop1 ? (
                <div className="w-auto">
                  <span className="w-full text-center flex flex-row justify-start">
                    Wissen
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 ml-2">
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
                  Wissen
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 ml-2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </span>
              )}
              {/* dropdown */}
              {showDrop1 && (
                <div className="rounded-lg pl-2">
                  <ul className="my-2">
                    <a href="/">
                      <span>Notfallinfos</span>
                    </a>
                  </ul>
                  <ul className="">
                    <a href="/">Blog</a>
                  </ul>
                </div>
              )}
            </ul>
            {/* link without dropdown */}
            <ul>Honorar</ul>
            {/* link with dropdown2 */}
            <ul
              className="relative"
              onClick={() => setShowDrop2(!showDrop2)}>
              {/* dropdown */}
              {!showDrop2 ? (
                <div className="w-auto">
                  <span className="w-full text-center flex flex-row justify-start">
                    Angebot
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 ml-2">
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
                  Angebot
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 ml-2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </span>
              )}
              {/* dropdown */}
              {showDrop2 && (
                <div className="rounded-lg pl-2">
                  <ul className="my-2">
                    <a href="/">
                      <span>Übersicht</span>
                    </a>
                  </ul>
                  <ul className="mb-2">
                    <a href="/">Klopfen gegen Angst</a>
                  </ul>
                  <ul className="mb-2">
                    <a href="/">
                      Unterstützer-Rettungsring
                    </a>
                  </ul>
                  <ul className="mb-2">
                    <a href="/">
                      Naturcoaching Selbstführung
                    </a>
                  </ul>
                  <ul className="mb-2">
                    <a href="/">Coaching</a>
                  </ul>
                  <ul className="mb-2">
                    <a href="/">
                      piKVT kognitive Verhaltenstherapie
                    </a>
                  </ul>
                </div>
              )}
            </ul>

            {/* link with dropdown3 */}
            <ul
              className="relative"
              onClick={() => setShowDrop3(!showDrop3)}>
              {/* dropdown */}
              {!showDrop3 ? (
                <div className="w-auto">
                  <span className="w-full text-center flex flex-row justify-start">
                    Über...
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 ml-2">
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
                  Über...
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 ml-2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </span>
              )}
              {/* dropdown */}
              {showDrop3 && (
                <div className="rounded-lg pl-2">
                  <ul className="my-2">
                    <a href="/">
                      <span>...Sie</span>
                    </a>
                  </ul>
                  <ul className="mb-2">
                    <a href="/">...mich</a>
                  </ul>
                </div>
              )}
            </ul>

            {/* link with dropdown4 */}
            <ul
              className="relative"
              onClick={() => setShowDrop4(!showDrop4)}>
              {/* dropdown */}
              {!showDrop4 ? (
                <div className="w-auto">
                  <span className="w-full text-center flex flex-row justify-start">
                    Kontakt
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 ml-2">
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
                  Kontakt
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 ml-2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </span>
              )}
              {/* dropdown */}
              {showDrop4 && (
                <div className="rounded-lg pl-2">
                  <ul className="my-2">
                    <a href="/">
                      <span>Datenschutz persönlich</span>
                    </a>
                  </ul>
                  <ul className="mb-2">
                    <a href="/">Datenschutz juristisch</a>
                  </ul>
                  <ul className="mb-2">
                    <a href="/">Impressum</a>
                  </ul>
                </div>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default test;
