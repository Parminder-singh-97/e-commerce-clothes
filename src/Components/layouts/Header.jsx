import { faRightFromBracket, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router";
import FlyingUpArrow from "../CustomComponents/FlyingUpArrow";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { logout } from "../../Redux/Slicer/AuthSlicer";
import { memo } from "react";
import { logoutUser } from "../../FireBase/FireBaseApp";

const Header = () => {
  let dispatch = useDispatch();
  const cartCount = useSelector((State) => State.cartSlicer.cartItems.length);
  const UserName = useSelector((State) => State.cartSlicer.loginUserName);

  const [isProfileTabOpen, setIsProfileTabOpen] = useState(false);

  let localDisplayNane = JSON.parse(localStorage.getItem("firebase:authUser:AIzaSyBUQt081iPpCoQr9A9SEVZOMb5GFOGZ4Dk:[DEFAULT]")).displayName
  const [menuToggle, setMenuToggle] = useState(false);
  const handleToggleMenu = () => {
    setMenuToggle(!menuToggle);
  };
  const handleLogout = () => {
    console.log("Logout triggered");
    dispatch(logout());
    logoutUser()
    localStorage.removeItem("cartItems")
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
          <ul className="p-4 flex gap-8 items-center" id="navbar">
            <li>
              <NavLink
                to="/home"
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
            <div className="flex justify-center items-center relative">
              <Avatar
                style={{ backgroundColor: "grey" }}
                icon={<UserOutlined />}
                className="cursor-pointer"
                onClick={() => setIsProfileTabOpen(!isProfileTabOpen)}
              />
              <div
                className={`flex flex-col gap-4 rounded-lg justify-center items-center bg-whiet shadow-2xl bg-slate-300 text-black absolute top-[50px] p-6 ${
                  isProfileTabOpen ? "block" : "hidden"
                }  `}
              >
                <p className="text-black font-extrabold">Profile</p>
                <span className="flex  w-full text-nowrap">{UserName || localDisplayNane}</span>
              <div className="flex justify-center items-center flex-col">
                <FontAwesomeIcon
                  onClick={handleLogout}
                  icon={faRightFromBracket}
                  className="text-2xl mx-4 cursor-pointer"
                />
                <span onClick={handleLogout}>Logout</span>
              </div>
              </div>
            </div>
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
              to="/home"
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

export default memo(Header);
