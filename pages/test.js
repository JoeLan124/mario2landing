import React from "react";

function test() {
  return (
    <div className="md:flex md:justify-between p-4">
      <div>Logo</div>

      {/* Links */}
      <div className="flex flex-col md:flex-row md:space-x-4">
        {/* Link 1 */}
        <div className="cursor-pointer group relative w-24">
          <h1 className="group bg-blue-200 w-auto inline">
            Link 1
          </h1>
          <div className="md:absolute top-6 hidden group-hover:block hover:block w-24">
            <div className="py-3">
              <div className="w-4 h-4 left-3 absolute top-8  bg-white rotate-45" />
            </div>
            <div className="mt-4 p-5 grid grid-cols-1 bg-white text-black w-auto">
              <ul>Hallo1</ul>
              <ul>Hallo2</ul>
              <ul>Hallo3</ul>
            </div>
          </div>
        </div>
        {/* Link 2 */}
        <div className="cursor-pointer group relative">
          <h1 className="group bg-blue-200 w-auto inline">
            Link 2
          </h1>
          <div className="absolute top-6 hidden group-hover:md:block hover:md:block w-24">
            <div className="py-3">
              <div className="w-4 h-4 left-3 absolute top-8  bg-white rotate-45" />
            </div>
            <div className="mt-4 p-5 grid grid-cols-1 bg-white text-black w-auto">
              <ul>Hallo1</ul>
              <ul>Hallo2</ul>
              <ul>Hallo3</ul>
            </div>
          </div>
        </div>
        {/* Link 3 */}
        <div className="cursor-pointer group relative">
          <h1 className="group bg-blue-200 w-auto inline">
            Link 3
          </h1>
          <div className="absolute top-6 hidden group-hover:md:block hover:md:block w-24">
            <div className="py-3">
              <div className="w-4 h-4 left-3 absolute top-8  bg-white rotate-45" />
            </div>
            <div className="mt-4 p-5 grid grid-cols-1 bg-white text-black w-auto">
              <ul>Hallo1</ul>
              <ul>Hallo2</ul>
              <ul>Hallo3</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default test;
