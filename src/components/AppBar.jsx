import React from 'react'
import AvatarImage from "../assets/images/avatar.jpg";
import { BiSearch } from 'react-icons/bi'

const AppBar = () => {
   return (
      <div className='h-12 w-11/12 mx-auto mt-4 flex items-center md:justify-between'>
         <BiSearch className='w-6 h-6 text-gray-600' />
         {/* <img className="w-10 h-10 ml-auto rounded-full border-2 border-gray-300" src={AvatarImage} alt="Avatar" />          */}
         <div className="flex ml-auto space-x-3">
            <img
               className='rounded-full w-[40px] h-[40px]'
               src={AvatarImage}
               alt="Avatar"
            />
            <label
               htmlFor="my-drawer-2"
               className="block p-2 h-fit place-self-center text-gray-600 transition bg-gray-100 rounded lg:hidden hover:text-gray-600/75 cursor-pointer"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M4 6h16M4 12h16M4 18h16"
                  />
               </svg>
            </label>
         </div>
      </div>
   )
}

export default AppBar