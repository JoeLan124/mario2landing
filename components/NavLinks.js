import React from "react";
import Link from "next/link";

const NavLinks = () => {
  const links = [
    {
      name: "Men",
    },
    {
      name: "Women",
    },
    {
      name: "Kids",
    },
  ];
  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <li className="border-b-2 border-transparent hover:border-b-2 hover:border-[#1b4b7c] hover:text-[#1b4b7c] hover:cursor-pointer">
            <Link href="/">{link.name}</Link>
          </li>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
