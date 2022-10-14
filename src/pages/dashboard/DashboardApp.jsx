import React from 'react'
import { HiUserGroup } from "react-icons/hi"
import { MdShoppingBasket } from "react-icons/md"

const DashboardApp = () => {
   return (
      <div className="p-5">
         <h1 className='text-2xl md:text-3xl font-bold font-poppins'>
            Welcome back, <br />
            Temilayo Subair! 👋🏾
         </h1>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8 h-60">
            <div className="bg-yellow-100 shadow shadow-yellow-200 rounded-2xl p-5 font-poppins grid place-content-center text-center text-yellow-700">
               <div className="w-fit group-icon p-3 mx-auto">
                  <HiUserGroup className='w-6 h-6 text-yellow-600' />
               </div>
               <h1 className="mt-5 text-2xl md:text-3xl font-bold ">10</h1>
               <p className='font-bold'>Total Users</p>
            </div>
            <div className="bg-sky-100 shadow shadow-sky-200 rounded-2xl p-5 font-poppins grid place-content-center text-center text-sky-700">
               <div className="w-fit hat-icon p-3 mx-auto">
                  <MdShoppingBasket className='w-6 h-6 text-sky-600 ' />
               </div>
               <h1 className="mt-5 text-2xl md:text-3xl font-bold ">5</h1>
               <p className='font-bold'>Total Subscribed Users</p>
            </div>
         </div>
      </div>
   )
}

export default DashboardApp