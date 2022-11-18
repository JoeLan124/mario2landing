import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Button from "../Button";

const NavBar = () => {
  const [open, setopen] = useState(false);
  return (
    <div
      className={` ${
        open ? "bg-white" : "bg-transparent"
      } mx-auto md:bg-white  text-sm md:text-xl text-[#336fac] sticky top-0`}>
      <div className="flex flex-col  md:flex-row md:justify-between w-full mx-auto">
        <div className="flex justify-between bg-white shrink-0">
          <Image
            className="flex items-center hover:cursor-pointer mb-1 z-50"
            height={100}
            width={175}
            src={"/src/image.png"}
            alt={"logo"}
          />
          <div
            className="text-3xl md:hidden mr-4 mt-4"
            onClick={() => {
              setopen(!open);
            }}>
            {`${open ? "x" : "|||"}`}
          </div>
        </div>

        <div>
          <div className="menu flex mt-2 px-4 items-center h-full">
            <ul className="md:flex hidden space-x-4 md:mr-36 ">
              <NavLinks />
            </ul>
            <div className=" hidden md:flex justify-end items-center">
              {/* <Button /> */}
            </div>
          </div>
          {/* mobile navbar */}
          <div className="relative h-screen w-screen md:hidden">
            <ul
              className={`md:hidden flex flex-col bg-white absolute top-0 left-0 uppercase space-y-12 mt-16 pl-4 duration-500 ${
                open ? "left-0" : "left-[-100%]"
              }`}>
              <NavLinks />
              <div className="mt-2 md:hidden">
                {/* <Button /> */}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
