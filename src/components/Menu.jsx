"use client"
import Link from 'next/link';
import React from 'react';
import { usePathname } from "next/navigation";

const Menu = () => {
    const pathName = usePathname()
  
    return (
      <div className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">
              Next Simple Blog
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link
                  className={`text-xl font-bold ${
                    pathName === "/" ? "bg-slate-200" : ""
                  }`}
                  href={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`font-bold text-xl ${
                    pathName === "/blogs" ? "bg-slate-200" : ""
                  } `}
                  href={"/blogs"}
                >
                  Blogs{" "}
                </Link>
              </li>
              {/* <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2 bg-base-100">
                    <li>
                      <a>Link 1</a>
                    </li>
                    <li>
                      <a>Link 2</a>
                    </li>
                  </ul>
                </details>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Menu;