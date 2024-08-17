import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoFastFoodSharp } from "react-icons/io5";
import Button from "./Assets/Button";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

function NavBar() {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div>
      <nav className="bg-blue-950 font-bold text-yellow-500 h-24 flex items-center justify-between pl-6 pr-8">
        <div className="flex items-center gap-8">
          <a href="/">
            <IoFastFoodSharp size={72} />
          </a>
          <h1 className="text-4xl font-semibold">Super Eats</h1>
        </div>

        <ul className="hidden md:flex items-center gap-6 text-xl max-w-screen-sm">
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-red-700 cursor-pointer transition-all"
            onClick={() => console.log("Home")}
          >
            Home
          </Link>

          <div className="relative group">
            <div className="flex items-center gap-1">
              <Link
                to="menu"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-red-700 cursor-pointer transition-all"
                onClick={() => console.log("Menu")}
              >
                Menu
              </Link>
              <BiChevronDown className="cursor-pointer" size={25} />
            </div>
            <ul className="bg-blue-950 text-yellow-500 absolute hidden group-hover:block space-y-2">
              <li>
                <Link
                  to="spicy"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-red-700 cursor-pointer transition-all"
                >
                  Spicy
                </Link>
              </li>
              <li>
                <Link
                  to="meaty"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-red-700 cursor-pointer transition-all"
                >
                  Meat
                </Link>
              </li>
              <li>
                <Link
                  to="vegetative"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-red-700 cursor-pointer transition-all"
                >
                  Vegetative
                </Link>
              </li>
            </ul>
          </div>

          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-red-700 cursor-pointer transition-all"
            onClick={() => console.log("About")}
          >
            About
          </Link>

          <Link
            to="reviews"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-red-700 cursor-pointer transition-all"
            onClick={() => console.log("Reviews")}
          >
            Reviews
          </Link>

          <Button title="Login" />
        </ul>

        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleChange} />
          )}
        </div>
      </nav>

      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col absolute bg-blue-950 text-yellow-500 left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <Link
          to="/"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-red-700 cursor-pointer transition-all"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="menu"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-red-700 cursor-pointer transition-all"
          onClick={closeMenu}
        >
          Menu
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-red-700 cursor-pointer transition-all"
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          to="reviews"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-red-700 cursor-pointer transition-all"
          onClick={closeMenu}
        >
          Reviews
        </Link>

        <Button title="Login" />
      </div>
    </div>
  );
}

export default NavBar;
