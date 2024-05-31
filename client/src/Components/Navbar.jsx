import { useState } from "react";
import logobgr from "../assets/images/logobgr.png";
import { Link, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { Drawer } from "@mui/material";
const Navbar = () => {
  let location = useLocation();
  let path = location.pathname;
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div className=" bg-slate-800 text-white p-3 fixed w-full z-50">
      <div className="flex justify-between lg:mx-20 mx-10">
        <div className="flex gap-2 items-center">
          <img src={logobgr} alt="" className="w-[80px]" />
          <h1 className="coral text-xl"> WEDYF</h1>
        </div>
        <div className=" gap-10 items-center hidden lg:flex">
          <Link
            to={"/"}
            className={
              path === "/"
                ? "underline underline-offset-4 text-orange-400 text-[17px]"
                : "hover:text-orange-400"
            }
          >
            Home
          </Link>
          <Link
            to={"/colleges"}
            className={
              path === "/colleges"
                ? "underline underline-offset-4 text-orange-400 text-[17px]"
                : "hover:text-orange-400"
            }
          >
            Find Colleges
          </Link>
          <Link
            to={"/about"}
            className={
              path === "/about"
                ? "underline underline-offset-4 text-orange-400 text-[17px]"
                : "hover:text-orange-400"
            }
          >
            About
          </Link>
          <Link
            to={"/pathway"}
            className={
              path === "/pathway"
                ? "underline underline-offset-4 text-orange-400 text-[17px]"
                : "hover:text-orange-400"
            }
          >
            Unique Pathway
          </Link>
          <Link
            to={"/services"}
            className={
              path === "/services"
                ? "underline underline-offset-4 text-orange-400 text-[17px]"
                : "hover:text-orange-400"
            }
          >
            Services
          </Link>
        </div>
        <div className="items-center hidden lg:flex">
          <div className="bg-white pl-5 pr-5 pt-2 pb-2 text-black rounded-md hover:bg-orange-400 hover:text-white">
            <Link>
              <h1>Free Consultation</h1>
            </Link>
          </div>
        </div>
        <div
          className="flex items-center lg:hidden "
          onClick={toggleDrawer(true)}
        >
          <IoMenu className="text-3xl" />
        </div>
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)} className="">
        <div className=" block w-[220px] h-[100vh] pt-10 leading-10 text-center bg-slate-800 text-white ">
          <ul>
            <li>
              <Link
                to={"/"}
                className={
                  path === "/"
                    ? "underline underline-offset-4 text-orange-400 text-[17px]"
                    : "hover:text-orange-400"
                }
              >
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to={"/colleges"}
                className={
                  path === "/colleges"
                    ? "underline underline-offset-4 text-orange-400 text-[17px]"
                    : "hover:text-orange-400"
                }
              >
                Find Colleges
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to={"/about"}
                className={
                  path === "/about"
                    ? "underline underline-offset-4 text-orange-400 text-[17px]"
                    : "hover:text-orange-400"
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/pathway"}
                className={
                  path === "/pathway"
                    ? "underline underline-offset-4 text-orange-400 text-[17px]"
                    : "hover:text-orange-400"
                }
              >
                Unique Pathway
              </Link>
            </li>
            <li>
              <Link
                to={"/services"}
                className={
                  path === "/services"
                    ? "underline underline-offset-4 text-orange-400 text-[17px]"
                    : "hover:text-orange-400"
                }
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
        <div className="bottom flex align-bottom  pb-10 justify-center bg-slate-900 text-white">
          <div className=" ">
            <div className="flex justify-center">
              <img src={logobgr} alt="" className="w-[70px] mt-[2px]" />
            </div>
            <p className="lato-regular text-center font-bold pt-2 tracking-wider">
              WEDYF
            </p>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
