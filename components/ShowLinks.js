import React from "react";
import { useState } from "react";

const ShowLinks = () => {
  const [showDrop1, setshowDrop1] = useState(false);
  return (
    <div
      className={`md:flex md:space-x-8 mx-4 space-y-1 md:space-y-0 md:mt-0 group"
      }`}>
      <ul>Link 1</ul>
      <ul
        className={`md:relative ${
          showDrop1 ? "underline" : "no-underline"
        }`}
        onClick={() => {
          setshowDrop1(!showDrop1);
        }}>
        {showDrop1 ? (
          <div className="w-16 md:float-left">
            <span className="underline"> Link 2</span>
            <span> -</span>
          </div>
        ) : (
          <div className="w-16 md:float-left">
            <span> Link 2</span>
            <span> +</span>
          </div>
        )}
      </ul>
      {showDrop1 && (
        <div className="ml-4 md:absolute w-full group-hover">
          <div className=" bg-slate-300 md:absolute top-8 left-10">
            <ul className="">Link A</ul>
            <ul className="">Link B</ul>
            <ul className="">Link C</ul>
          </div>
        </div>
      )}
      <ul>Link 3</ul>
    </div>
  );
};

export default ShowLinks;
