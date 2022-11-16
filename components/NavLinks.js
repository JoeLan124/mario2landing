import React from "react";
import Link from "next/link";

const NavLinks = () => {
  const links = [
    {
      name: "Men",
      url: "men",
      submenu: true,
      sublinks: [
        {
          Head: "Topwear",
          sublink: [
            {
              name: "Casual",
              link: "/",
            },
            {
              name: "Formal Shirts",
              link: "/",
            },
            {
              name: "T-Shirt",
              link: "/",
            },
            {
              name: "T-Shirt",
              link: "/",
            },
          ],
        },
      ],
    },
    {
      name: "Women",
      url: "women",
    },
    {
      name: "Kid's",
      url: "kids",
    },
  ];
  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <li className="border-b-2 border-transparent hover:border-b-2 hover:border-[#1b4b7c] hover:text-[#1b4b7c] hover:cursor-pointer">
            <Link href={`/${link.url}`}>{link.name}</Link>
            {link.submenu && (
              <div>
                <div className="md:absolute top-20">
                  <div className="bg-white">
                    {link.sublinks.map(
                      (mysublinks, index) => (
                        <div key={index}>
                          <h1 className="text-lg font-semibold">
                            {mysublinks.Head}
                          </h1>
                          <h2>
                            {mysublinks.sublink.map(
                              (slink, index) => (
                                <div key={index}>
                                  <div>
                                    <Link
                                      className="hover:text-primary"
                                      href="`${slink.link}`">
                                      <li className="text-sm text-gray-600 my-2.5">
                                        {slink.name}
                                      </li>
                                    </Link>
                                  </div>
                                </div>
                              )
                            )}
                          </h2>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
          </li>
        </div>
      ))}
    </>
  );
};

export default NavLinks;