import React, {use, useEffect, useRef, useState} from "react";
import {HiOutlineUserCircle} from "react-icons/hi";

import {NavLink} from "react-router";
import {AuthContexts} from "../../contexts/AuthContexts/AuthContexts";

const Navber = () => {
  const {user, signOutUser} = use(AuthContexts);
  // console.log(user);
  const [show, setShow] = useState(true);

  const lastScrollY = useRef(0);
  const timerRef = useRef(null);

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;
    // 👉 add background + shrink

    if (currentScrollY > lastScrollY.current) {
      // scroll down → hide
      setShow(false);

      // clear previous timer
      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setShow(true); // ⏱ auto show
      }, 1000);
    } else {
      // scroll up → show immediately
      setShow(true);
    }

    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handelSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("sign out user");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/findJob">Find a Job</NavLink>
      </li>

      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    // navbar bg-base-100 shadow-sm
    <div
      className={`navbar fixed   z-50  w-full  mx-auto right-0 left-0
        transition-all duration-500
        ${show ? "translate-y-0" : "-translate-y-full"}
        bg-base-100 shadow-sm`}
      // className=" navbar bg-base-100 shadow-sm"
    >
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="text-xl">
          <span className="bg-blue-800 text-white p-2 shadow-blue-600 ">Job</span>
          <span className="bg-blue-500 text-white p-2  shadow-blue-600 ">Finder</span>
        </a>
      </div>
      {/* <button className="btn btn-primary">Get Started</button>
      <input
        type="text"
        placeholder="Search jobs..."
        className="input input-l"
      /> */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>{" "}
      {user ? (
        <div className="navbar-end">
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {user ? (
                  user.photoURL
                ) : (
                  <span>
                    <HiOutlineUserCircle />
                  </span>
                )}
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  {user && (
                    <span className="mr-4">
                      {user.displayName || user.email}
                    </span>
                  )}
                </a>
              </li>
              <li>
                <NavLink to="/addJob">Add Job</NavLink>
              </li>
              <li>
                <NavLink to="/appliedJobs">My Applications</NavLink>
              </li>
              <li>
                <NavLink to="/myPostedJob">My Posted Job</NavLink>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={handelSignOut} className="btn btn-ghost">
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="navbar-end">
          <NavLink to="/register" className="underline mr-4">
            Register
          </NavLink>
          <NavLink to="/signIn" className="btn btn-primary">
            Sign In
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navber;
