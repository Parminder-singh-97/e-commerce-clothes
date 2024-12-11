import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";
import FlyingUpArrow from "../CustomComponents/FlyingUpArrow";

const Header = () => {
  const cartCount = useSelector((State) => State.cartSlicer.cartItems.length);
  const [menuToggle, setMenuToggle] = useState(false);
  const handleToggleMenu = () => {
    setMenuToggle(!menuToggle);
    console.log("object");
  };
  return (
    <>
      <section id="header" className="flex relative ">
        <FlyingUpArrow />
        <a href="">
          <img src="/images/logo.png" alt="logo" className="logo" />
        </a>
        <i onClick={handleToggleMenu} className="fa-solid fa-bars" />
        <nav>
          <ul className="p-4 flex gap-8 items-center text-[20px]" id="navbar">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-700  border-b-4 border-red-700 pb-1"
                    : "text-black"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Shop"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-700 border-b-4 border-red-700 pb-1"
                    : "text-black"
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Blog"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-700 border-b-4 border-red-700 pb-1"
                    : "text-black"
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-700 border-b-4 border-red-700 pb-1"
                    : "text-black"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-700 border-b-4 border-red-700 pb-1"
                    : "text-black"
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <Link to="/Cart" className="relative">
                <i className="fa-solid fa-bag-shopping text-[25px]" />
                <div className="top-[-15px] right-[-25px] absolute rounded-full text-[12px] bg-red-700 text-white flex px-3 py-1 m-0">
                  {cartCount}
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        <ul
          className={` ${
            menuToggle == true
              ? "overflow-hidden w-[100%] left-0  p-4"
              : "overflow-hidden w-[0%] left-[-100%]"
          }   absolute top-0  drop-shadow-2xl backdrop-blur-md  flex gap-8 items-center flex-col text-[20px] transition-[all] duration-1000 `}
          id=""
        >
          <FontAwesomeIcon
            onClick={handleToggleMenu}
            icon={faTimes}
            className=" font-extrabold text-[40px]"
          />
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-red-700  border-b-4 border-red-700 pb-1"
                  : "text-black"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Shop"
              className={({ isActive }) =>
                isActive
                  ? "text-red-700 border-b-4 border-red-700 pb-1"
                  : "text-black"
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Blog"
              className={({ isActive }) =>
                isActive
                  ? "text-red-700 border-b-4 border-red-700 pb-1"
                  : "text-black"
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive
                  ? "text-red-700 border-b-4 border-red-700 pb-1"
                  : "text-black"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive
                  ? "text-red-700 border-b-4 border-red-700 pb-1"
                  : "text-black"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <Link to="/Cart" className="relative">
              <i className="fa-solid fa-bag-shopping text-[25px] text-black" />
              <div className="top-[-15px] right-[-25px] absolute rounded-full text-[12px] bg-red-700 text-white flex px-3 py-1 m-0">
                {cartCount}
              </div>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Header;
