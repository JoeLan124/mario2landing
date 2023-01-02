import React, { Children } from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

function NavBarNew() {
  // Hamburger-menu icon
  const [showMenue, setShowMenue] = useState(false);

  // each dropdown-menu
  const [showDrop1, setShowDrop1] = useState(false);
  const [showDrop2, setShowDrop2] = useState(false);
  const [showDrop3, setShowDrop3] = useState(false);
  const [showDrop4, setShowDrop4] = useState(false);
  return (
    <div className="bg-slate-100 top-0 w-full sticky">
      <div className=" bg-opacity-20">
        <div className="flex md:justify-between items-center first-letter:p-4 pl-4 md:pr-36 mt-0 space-x-4 sticky md:bg-white top-0 shadow-xl select-none">
          {/* // logo-icon */}
          <Image
            className="flex items-center hover:cursor-pointer mt-0 z-50 select-none"
            height={100}
            width={175}
            src={"/src/image.png"}
            alt={"logo"}
          />

          {/* hamburger / menu icon */}
          <div className="md:hidden flex text-lg text-[#4c7298] justify-end items-center h-full w-full pr-8">
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
          <div className=" hidden md:flex md:flex-row md:space-x-8 text-lg text-[#4c7298] md:bg-white ">
            {/* Link 1 */}
            <div className="cursor-pointer group relative ">
              <Link href="/">
                <h1 className="group w-auto inline">
                  Start
                </h1>
              </Link>
              <div className="md:absolute top-6 hidden group-hover:block hover:block w-24"></div>
            </div>
            {/* Link 2 */}
            <div className="cursor-pointer group relative text-lg">
              <Link href="/wissen">
                <h1 className="group w-auto inline">
                  Wissen
                </h1>
              </Link>
              <div className="absolute top-6 hidden group-hover:md:block hover:md:block w-auto">
                <div className="py-3">
                  <div className="w-4 h-4 left-3 absolute top-10  bg-white rotate-45" />
                </div>
                <div className="mt-6 p-5 grid grid-cols-1 bg-white text-[#4c7298] w-24 divide-y divide-solid">
                  <Link href="/notfallinfos">
                    <ul>Notfall-Infos</ul>
                  </Link>
                  <Link href="/blog">
                    <ul>Blog</ul>
                  </Link>
                </div>
              </div>
            </div>
            {/* Link 3 */}
            <div className="cursor-pointer group relative ">
              <Link href="/honorar">
                <h1 className="group w-auto inline">
                  Honorar
                </h1>
              </Link>
              <div className="md:absolute top-6 hidden group-hover:block hover:block w-24"></div>
            </div>
            {/* Link 4 */}
            <div>
              <div className="cursor-pointer group relative">
                <Link href="/angebot">
                  <h1 className="group w-auto inline">
                    Angebot
                  </h1>
                </Link>
                <div className="absolute top-6 hidden group-hover:md:block hover:md:block w-auto">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute top-10 bg-white rotate-45" />
                  </div>
                  <div className="mt-6 p-5 grid grid-cols-1 bg-white text-[#4c7298] w-48 text-left divide-y divide-solid">
                    <Link href="/uebersicht">
                      <ul>Übersicht</ul>
                    </Link>
                    <Link href="/klopfen">
                      <ul>Klopfen gegen Angst</ul>
                    </Link>
                    <Link href="/rettungsring">
                      <ul>Unterstützer-Rettungsring</ul>
                    </Link>
                    <Link href="/naturcoaching">
                      <ul>Naturcoaching Selbstführung</ul>
                    </Link>
                    <Link href="/coaching">
                      <ul>Coaching</ul>
                    </Link>
                    <Link href="pikvt">
                      <ul>
                        piKVT kognitive Verhaltenstherapie
                      </ul>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Link 5 */}
            <div className="cursor-pointer group relative">
              <Link href="/ueber">
                <h1 className="group w-auto inline">
                  Über...
                </h1>
              </Link>
              <div className="absolute top-6 hidden group-hover:md:block hover:md:block w-auto">
                <div className="py-3">
                  <div className="w-4 h-4 left-3 absolute top-10 bg-white rotate-45" />
                </div>
                <div className="mt-6 p-5 grid grid-cols-1 bg-white text-[#4c7298] w-24 text-left divide-y divide-solid">
                  <Link href="/uebersie">
                    <ul>...Sie</ul>
                  </Link>
                  <Link href="/uebermich">
                    <ul>...mich</ul>
                  </Link>
                </div>
              </div>
            </div>
            {/* Link 6 */}
            <div className="cursor-pointer group relative">
              <Link href="/kontakt">
                <h1 className="group w-auto inline">
                  Kontakt
                </h1>
              </Link>
              <div className="absolute top-6 hidden group-hover:md:block hover:md:block w-auto">
                <div className="py-3">
                  <div className="w-4 h-4 left-3 absolute top-10 bg-white rotate-45" />
                </div>
                <div className="mt-6 p-5 grid grid-cols-1 bg-white text-[#4c7298] w-36 text-left divide-y divide-solid">
                  <Link href="/datenpers">
                    <ul>Datenschutz persönlich</ul>
                  </Link>
                  <Link href="/datenjur">
                    <ul>Datenschutz juristisch</ul>
                  </Link>
                  <Link href="/impressum">
                    <ul>Impressum</ul>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Links mobile view */}
        {showMenue && (
          <div className="flex flex-col md:hidden w-full md:space-y-0 md:space-x-4 space-y-4 rounded-lg pl-20 text-[#4c7298] select-none">
            {/* link without dropdown */}
            <Link href="/">
              <ul className="w-auto mt-4">Start</ul>
            </Link>
            {/* link with dropdown1 */}
            <ul
              className="relative"
              onClick={() => setShowDrop1(!showDrop1)}>
              {/* dropdown */}
              {!showDrop1 ? (
                <div className="w-auto">
                  <span className="w-full text-center flex flex-row justify-start">
                    <div className="flex justify-start w-16">
                      <Link href="/wissen">Wissen</Link>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 ml-2 float-right">
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
                  <div className="flex justify-start w-16">
                    <Link href="/wissen">Wissen</Link>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 ml-2 float-right">
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
                    <Link href="/notfallinfos">
                      <span>Notfallinfos</span>
                    </Link>
                  </ul>
                  <ul className="my-2">
                    <Link href="/blog">
                      <span>Blog</span>
                    </Link>
                  </ul>
                </div>
              )}
            </ul>
            {/* link without dropdown */}
            <Link href="honorar">
              <ul>Honorar</ul>
            </Link>
            {/* link with dropdown2 */}
            <ul
              className="relative"
              onClick={() => setShowDrop2(!showDrop2)}>
              {/* dropdown */}
              {!showDrop2 ? (
                <div className="w-auto">
                  <span className="w-full text-center flex flex-row justify-start">
                    <Link href="/angebot">
                      <div className="flex justify-start w-16">
                        Angebot
                      </div>
                    </Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 ml-2 float-right">
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
                  <Link href="/angebot">
                    <div className="flex justify-start w-16">
                      Angebot
                    </div>
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 ml-2 float-right">
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
                    <Link href="/ueber">
                      <div className="flex justify-start w-16">
                        Über...
                      </div>
                    </Link>
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
                  <Link href="/ueber">
                    <div className="flex justify-start w-16">
                      Über...
                    </div>
                  </Link>
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
                  <Link href="/uebersie">
                    <ul className="my-2">
                      <span>...Sie</span>
                    </ul>
                  </Link>
                  <Link href="/uebermich">
                    <ul className="mb-2">
                      <span>...mich</span>
                    </ul>
                  </Link>
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
                    <Link href="/kontakt">
                      <div className="flex justify-start w-16 mb-6">
                        Kontakt
                      </div>
                    </Link>
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
                  <Link href="/kontakt">
                    <div className="flex justify-start w-16">
                      Kontakt
                    </div>
                  </Link>
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
                  <Link href="/datenpers">
                    <ul className="my-2">
                      <span>Datenschutz persönlich</span>
                    </ul>
                  </Link>
                  <Link href="/datenjur">
                    <ul className="mb-2">
                      <span>Datenschutz juristisch</span>
                    </ul>
                  </Link>

                  <Link href="/impressum">
                    <ul className="mb-6">
                      <span>Impressum</span>
                    </ul>
                  </Link>
                </div>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBarNew;
