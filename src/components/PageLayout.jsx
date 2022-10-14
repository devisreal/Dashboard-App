import React from "react";
import SideNav from "./SideNav";
import AppBar from "./AppBar";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
   return (
      <div className="drawer-mobile drawer">
         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
         <div className="drawer-content">
            
            <AppBar />         
            <Outlet />
         </div>
         <SideNav />
      </div>
   );
};

export default PageLayout;
