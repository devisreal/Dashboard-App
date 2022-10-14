import React from 'react'
import AvatarImage from "../assets/images/avatar.jpg";
import { BiTachometer, BiChevronRight } from 'react-icons/bi'
import { HiUser } from 'react-icons/hi'
import { ImBlogger2 } from 'react-icons/im'
import { Link, NavLink } from "react-router-dom";

const SideNav = () => {
   return (
      <div className="drawer-side border-r shadow">
         <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

         <div className="w-[17rem] flex flex-col overflow-y-auto bg-white p-3">

            {/* Avatar */}
            <div className="p-3 px-4  bg-gray-100 rounded-xl flex items-center space-x-6 ">
               <img className="w-12 h-12 rounded-full border-2 border-gray-300" src={AvatarImage} alt="Avatar" />
               <div className="font-poppins flex-col flex">
                  <h6 className="font-bold text-md">Israel Akinoso</h6>
                  <small className="text-gray-700 font-medium">SUPER_AUTHOR</small>
               </div>
            </div>

            {/* SideNav */}
            <ul className=" overflow-y-auto bg-white font-poppins mt-8">
               <div className="">
                  <small className="font-bold px-3 text-gray-600">GENERAL</small>

                  <NavLink
                     to="app"
                     style={({ isActive }) => {
                        return {
                           color: isActive ? "rgb(17 24 39)" : "#6b7280",
                           background: isActive ? "#f3f4f6" : "",
                           fontWeight: isActive ? "600" : "500"
                        };
                     }}
                     className=" p-3 rounded-lg flex items-center space-x-4 mt-1"
                  >
                     <BiTachometer className="w-6 h-6" />
                     <p className="text-sm">App</p>
                  </NavLink>
               </div>

               <div className="mt-5">
                  <small className="font-bold px-3 text-gray-600">MANAGEMENT CONSOLE</small>

                  <NavLink
                     to="author"
                     style={({ isActive }) => {
                        return {
                           color: isActive ? "rgb(17 24 39)" : "#6b7280",
                           background: isActive ? "#f3f4f6" : "",
                           fontWeight: isActive ? "600" : "500"
                        };
                     }}
                     className=" p-3 rounded-lg flex items-center mt-1 hover:bg-gray-100"
                  >
                     <HiUser className="w-5 h-5 mb-0.5" />
                     <p className="text-sm ml-3">Author</p>
                     <BiChevronRight className="ml-auto" />
                  </NavLink>

                  <NavLink
                     to="link"
                     style={({ isActive }) => {
                        return {
                           color: isActive ? "rgb(17 24 39)" : "#6b7280",
                           background: isActive ? "#f3f4f6" : "",
                           fontWeight: isActive ? "600" : "500"
                        };
                     }}
                     className=" p-3 rounded-lg flex items-center mt-1 hover:bg-gray-100"
                  >
                     <ImBlogger2 className="w-5 h-5 text-gray-500 mb-0.5" />
                     <p className="text-sm font-medium text-gray-500 ml-3">Content Creation</p>
                     <BiChevronRight className="ml-auto text-gray-500" />
                  </NavLink>
               </div>
            </ul>

            <Link
               to="/"
               className="mx-auto mt-auto mb-2 font-poppins inline-flex w-fit items-center rounded-lg bg-cyan-600 px-4 py-2 text-center shadow-lg shadow-cyan-100 hover:shadow-none text-xs font-semibold text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
               Log Out
            </Link>
         </div>
      </div>
   )
}

export default SideNav