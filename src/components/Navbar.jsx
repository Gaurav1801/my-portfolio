import React, { useState,useEffect } from "react";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handelScroll);
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);
  return (
    <div>
      {/* <div className="bg-gradient-to-r from-slate-900 to-blue-400 flex h-12">
        <div className="list-none flex justify-center mx-auto font-medium text-2xl items-center h-12">
          <li className="px-6 hover:text-blue-500">me</li>
          <li className="px-6  hover:text-blue-500">projects</li>
          <li className="px-5  hover:text-blue-500">contact</li>
        </div>
        <div className="me-3 pt-2 text-3xl hover:text-blue-800">
          <FaGithub />
        </div>
      </div> */}
      <div className={`navbar fixed top-0 left-0 right-0 z-10 bg-base-100 bg-transparent flex ${
        sticky
          ? "sticky-navbar shadow-md bg-gradient-to-r from-slate-500 to-blue-800 transition-all ease-in-out"
          : ""
      }`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-72 p-2 shadow font-medium pb-5 "
            >
               <li className="hover:text-blue-500">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="#skills">Skills</a>
            </li>
            <li className=" hover:text-blue-500">
              <a href="#project">Project</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="#contact" className="duration-500">Contact</a>
            </li>
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        </div>
        <div className="navbar-center hidden lg:flex h-12 font-medium duration-500">
          <ul className="menu menu-horizontal text-2xl px-1">
            <li className="hover:text-blue-500">
              <a href="#about">About</a>
            </li>
            <li className="mx-5 hover:text-blue-500">
              <a href="#skills">Skills</a>
            </li>
            <li className="mx-5 hover:text-blue-500">
              <a href="#project">Project</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="#contact" className="duration-500">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end mx-4">
          <a className="text-3xl text-black hover:text-blue-800" href="https://github.com/Gaurav1801">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
