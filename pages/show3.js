import React from "react";
import { useState } from "react";
import ShowLinks from "../components/ShowLinks";

function show3() {
  const [showMenue, setShowMenue] = useState(false);
  const [showDrop, setShowDrop] = useState(false);

  return (
    <div>
      <nav>
        <div className="flex justify-between m-4">
          <div>
            <div>Logo</div>
          </div>

          <div>
            {/* menue button mobile */}
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
            {/* menue button mobile */}

            {/* links md-screen */}
            <div className="hidden md:flex">
              <ShowLinks />
            </div>
            {/* links md-screen */}
          </div>
        </div>

        {showMenue && (
          <div className="flex flex-col md:hidden w-full bg-green-600">
            <ShowLinks />
          </div>
        )}
      </nav>
      <section className="bg-blue-300 h-screen">
        main-content
      </section>
    </div>
  );
}

export default show3;
