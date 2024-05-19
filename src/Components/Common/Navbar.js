import React, { useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import ProfileDropDown from "./ProfileDropDown";
import { NavbarLinks } from "../../Data/NavbarLinks";
import "../Common/loder.css";

const Navbar = () => {
  const logo =
    "https://res.cloudinary.com/dkoezhi9u/image/upload/v1715979555/UploadOnly/earth_d161qn.png";
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const totalItems = 1;
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const [subLinks, setSublinks] = useState([]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-950 h-14 flex items-center justify-center border-b border-b-richblack-700">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img alt="logo" src={logo} className="w-16" loading="lazy" />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div
          className="md:hidden text-[#AFB2BF] scale-150 cursor-pointer"
          onClick={toggleMenu}
        >
          <RxHamburgerMenu />
        </div>

        {/* Nav Links */}
        <nav
          className={`fixed md:relative top-14 md:top-0 left-0 w-full md:w-auto bg-gray-950 md:bg-transparent z-40 flex flex-col md:flex-row items-start md:items-center transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <ul className="w-full flex flex-col md:flex-row gap-6 p-4 md:p-0 text-richblack-25 md:items-center">
            {NavbarLinks.map((link, index) => (
              <li key={index} className="w-full md:w-auto">
                {link.title === "Catalog" ? (
                  <div className="relative flex items-center gap-2 group">
                    <p>{link.title}</p>
                    <IoIosArrowDown />
                    <div
                      className={`invisible absolute right-0 ${
                        subLinks.length ? "translate-y-3" : "translate-y-10"
                      } top-full z-50 flex flex-row rounded-md bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100`}
                    >
                      <div className="absolute right-4 top-0 transform translate-y-[-45%] h-6 w-6 rotate-45 bg-richblack-5"></div>
                      {subLinks.length ? (
                        subLinks.map((subLink, index) => (
                          <Link
                            className="rounded-lg py-2 px-4 hover:bg-richblack-50"
                            to={`catalog/${subLink.name}`}
                            key={index}
                          >
                            {subLink.name}
                          </Link>
                        ))
                      ) : (
                        <span className="loader"></span>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={link.path}>
                    <p
                      className={`${
                        matchRoute(link.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Login/SignUp/Dashboard for Mobile */}
          <div className="md:hidden flex flex-col gap-4 items-center pb-4">
            {token === null ? (
              <>
                <Link to="/login">
                  <button className="border border-richblack-700 bg-richblack-800 px-3 py-2 text-richblack-100 rounded-md">
                    Log in
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="border border-richblack-700 bg-richblack-800 px-3 py-2 text-richblack-100 rounded-md">
                    Sign Up
                  </button>
                </Link>
              </>
            ) : (
              <ProfileDropDown />
            )}
          </div>
        </nav>

        {/* Login/SignUp/Dashboard for Desktop */}
        <div className="hidden md:flex gap-4 items-center">
          {token === null ? (
            <>
              <Link to="/login">
                <button className="border border-richblack-700 bg-richblack-800 px-3 py-2 text-richblack-100 rounded-md">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="border border-richblack-700 bg-richblack-800 px-3 py-2 text-richblack-100 rounded-md">
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <ProfileDropDown />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
