import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <div className=" bg-white opacity-70 flex justify-between mx-auto text-sm md:text-xl text-[#336fac] sticky top-0">
      <div>
        <Image
          className="mt-2 hover:cursor-pointer"
          height={100}
          width={200}
          src={"/src/image.png"}
          alt={"logo"}
        />
      </div>
      <div className="menu flex mt-2 px-4 items-center">
        <ul className="flex space-x-4 mr-4 uppercase">
          <NavLinks />
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
