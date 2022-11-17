import React, { useState } from "react";
import Link from "next/link";
import { mylinks } from "./Mylinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState();
  return (
    <>
      {mylinks.map((link, index) => (
        <div key={index}>
          <li className="border-b-2 border-transparent hover:border-b-2 hover:border-[#1b4b7c] hover:text-[#1b4b7c] hover:cursor-pointer group">
            <li
              //href={`/${link.url}`}
              onClick={() =>
                heading !== link.name
                  ? setHeading(link.name)
                  : setHeading("")
              }>
              {link.name}
            </li>
            {heading}
            {link.submenu && (
              <div>
                <div className="md:absolute top-16 hidden group-hover:md:block hover:md:block">
                  <div className="py-5">
                    <div className="w-6 h-6 left-2 absolute mt-2 md:bg-blue-200 rotate-45"></div>
                  </div>
                  <div className="md:bg-blue-200 p-3.5 grid grid-cols-1 gap-16 w-48">
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
                {/* mobile menu */}
                <div className="md:hidden">
                  {link.sublinks.map((slinks, index) => (
                    <div key={index}>
                      <div>
                        <h1
                          onClick={() => {
                            subHeading !== slinks.Head
                              ? setSubHeading(slinks.Head)
                              : setSubHeading("");
                          }}
                          className="py-4 pl-7 font-semibold md:pr-0 pr-5">
                          ){slinks.Head}
                        </h1>
                        <div
                          className={`heading === link.name ? "md:hidden" : "hidden"
                        `}>
                          {/* sublinks*/}
                          {slinks.sublink.map(
                            (slink, index) => (
                              <div key={index}>
                                <li className="py-3 pl-14">
                                  <Link
                                    href={`${slink.url}`}>
                                    {slink.name}
                                  </Link>
                                </li>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
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
