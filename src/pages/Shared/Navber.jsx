import React, {use} from "react";

import {NavLink} from "react-router";
import {AuthContexts} from "../../contexts/AuthContexts/AuthContexts";

const Navber = () => {
  const {user, signOutUser} = use(AuthContexts);
  console.log(user);
  //  const [sticky, setSticky] = useState(false);

  //  useEffect(() => {
  //    const handleScroll = () => {
  //      setSticky(window.scrollY > 50);
  //    };

  //    window.addEventListener("scroll", handleScroll);
  //    return () => window.removeEventListener("scroll", handleScroll);
  //  }, []);
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
        <NavLink to="/Recruiters">Recruiters</NavLink>
      </li>
      <li>
        <NavLink to="/candidates">Candidates</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {/* candidate */}
      {user && <li><NavLink to="/appliedJobs">My Applications</NavLink></li>}


      {/* recruiter */}
      {user && <li><NavLink to="/addJob">Add Job</NavLink></li>}
      {user && <li><NavLink to="/myPostedJob">My Posted Job</NavLink></li>}
    </>
  );
  return (
    // navbar bg-base-100 shadow-sm
    <div
      // className={`fixed top-0 navbar  z-30 transition-all duration-300 ${
      //   sticky ? "navbar bg-base-100 shadow-sm" : "navbar"
      // }`}
      className=" navbar bg-base-100 shadow-sm"
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
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user  && <span className="mr-4">{user.displayName || user.email}</span>}
        {user ? (
          <button onClick={handelSignOut} className="btn btn-ghost">
            Sign Out
          </button>
        ) : (
          <>
            <NavLink to="/register" className="underline mr-4">
              Register
            </NavLink>
            <NavLink to="/signIn" className="btn btn-primary">
              Sign In
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navber;
