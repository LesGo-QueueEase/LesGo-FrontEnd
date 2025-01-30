import React, { useState } from "react";
import {
  IoIosPeople,
  IoIosListBox,
  IoIosAlbums,
  IoIosNotifications,
  IoIosChatboxes,
  IoIosOptions,
  IoMdLogOut,
  IoMdPaperPlane,
  IoMdMenu,
} from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate("");
  return (
    <div className=" flex flex-col w-full lg:hidden inset-0 ">
      <div className="bg-blue-950 w-full h-12 absolute flex lg:hidden text-white items-center px-2 z-50">
        {/* logo */}
        <div className="w-[50%]  flex justify-center items-center">
          <div className="flex  justify-start px-4 w-full items-center gap-x-2">
            <div className="h-8 w-8">
              <img src="/images/lesgologo.png" />
            </div>
            <div>
              <label className="text-md font-bold font-inter flex">
                Les
                <p className="text-yellow-500">Go</p>
              </label>
            </div>
          </div>
        </div>
        {/* humberger */}
        <div className="w-full flex justify-end">
          <div className="">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 shadow-lg bg-transparent rounded-lg"
            >
              <IoMdMenu />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "h-[28rem] sm:h-80 " : "h-12"
        } w-full absolute bg-blue-900 z-10 duration-1000 overflow-hidden`}
      >
        <div className="p-0 sm:p-12 mt-12 sm:mt-0  sm:flex flex-none justify-center items-center h-full">
          <div className="">
            <div className="  text-lg text-white flex items-center w-full border-t  border-blue-900  border-opacity-25  pl-0 sm:pl-8  gap-x-2 h-14">
              <div
                onClick={() => {
                  navigate("/student/queue");
                  setIsOpen(false);
                }}
                className=" flex items-center gap-x-2 hover:text-black hover:bg-white hover:translate-x-1 duration-700 p-2 sm:w-56 w-[95%] cursor-pointer rounded-full"
              >
                <IoIosPeople className="w-8 h-8 text-yellow-500" />
                <p>Today's Queue </p>
              </div>
            </div>

            <div className="  text-lg text-white flex items-center w-full  border-blue-900  border-opacity-25  pl-0 sm:pl-8  gap-x-2 h-14">
              <div
                onClick={() => {
                  navigate("/student/requests");
                  setIsOpen(false);
                }}
                className=" flex items-center gap-x-2 hover:text-black hover:bg-white hover:translate-x-1 duration-700 p-2 sm:w-56 w-[95%] cursor-pointer rounded-full"
              >
                <IoMdPaperPlane className="w-8 h-8 text-yellow-500" />
                <p>Requests</p>
              </div>
            </div>

            <div className="">
              <div className="  text-lg text-white flex items-center w-full  border-blue-900  border-opacity-25  pl-0 sm:pl-8  gap-x-2 h-14">
                <div
                  onClick={() => {
                    navigate("/student/records");
                    setIsOpen(false);
                  }}
                  className=" flex items-center gap-x-2 hover:text-black hover:bg-white hover:translate-x-1 duration-700 p-2 sm:w-56 w-[95%]  cursor-pointer rounded-full"
                >
                  <IoIosAlbums className="w-8 h-8 text-yellow-500" />
                  <p>Records </p>
                </div>
            </div>  
                      
            <div className="  text-lg text-white flex items-center w-full  border-blue-900  border-opacity-25  pl-0 sm:pl-8  gap-x-2 h-14">
              <div
                onClick={() => {
                  navigate("/student/notifications");
                  setIsOpen(false);
                }}
                className=" flex items-center gap-x-2 hover:text-black hover:bg-white hover:translate-x-1 duration-700 p-2 sm:w-56 w-[95%] cursor-pointer rounded-full"
              >
                <IoIosNotifications className="w-8 h-8 text-yellow-500" />
                <p>Notifications </p>
              </div>
            </div>
          </div>



            <div className=" text-lg text-white flex items-center w-full  border-blue-900  border-opacity-25  pl-0 sm:pl-8 gap-x-2 h-14">
              <div
                onClick={() => {
                  navigate("/student/feedbacks");
                  setIsOpen(false);
                }}
                className=" flex items-center gap-x-2 hover:text-black hover:bg-white hover:translate-x-1 duration-700 p-2 sm:w-56 w-[95%] cursor-pointer rounded-full"
              >
                <IoIosChatboxes className="w-8 h-8 text-yellow-500" />
                <p>Feedbacks</p>
              </div>
            </div>
            <div className="  text-lg text-white flex items-center w-full border-blue-900  border-opacity-25  pl-0 sm:pl-8  gap-x-2 h-14">
              <div
                onClick={() => {
                  navigate("/student/preferences");
                  setIsOpen(false);
                }}
                className=" flex items-center gap-x-2 hover:text-black hover:bg-white hover:translate-x-1 duration-700 p-2 sm:w-56 w-[95%] cursor-pointer rounded-full"
              >
                <IoIosOptions className="w-8 h-8 text-yellow-500" />
                <p>Preferences</p>
              </div>
            </div>
            <div className="  text-lg text-white flex items-center w-full border-t border-blue-900  border-opacity-25  pl-0 sm:pl-8 gap-x-2 h-14">
              <div
                onClick={() => navigate("/")}
                className=" flex items-center gap-x-2 hover:text-black hover:bg-white hover:translate-x-1 duration-700 p-2 sm:w-56 w-[95%] cursor-pointer rounded-full"
              >
                <IoMdLogOut className="w-8 h-8 text-yellow-500" />
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
