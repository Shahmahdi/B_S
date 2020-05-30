import React, { useState, useEffect } from "react";
import { Drawer } from "@material-ui/core";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export const Layout = (props: { component: any }) => {
  const [openSidebar, setOpenSidebar] = useState(
    window.innerWidth <= 760 ? false : true
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      let currentHideNav = window.innerWidth >= 760;
      if (currentHideNav !== openSidebar) {
        setOpenSidebar(currentHideNav);
      }
    });
  });

  return (
    <div className="flex w-full h-screen">
      <div className={`hidden md:flex`}>
        <div className={`${openSidebar ? "flex" : "hidden"} w-260px text-white`}>
          <Sidebar />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <Topbar setOpenSidebar={() => setOpenSidebar(!openSidebar)} />
        <div className="flex-1 p-3 bg-gray-100">{props.component()}</div>
      </div>
      <div className="flex md:hidden">
        <Drawer
          className="flex md:hidden"
          anchor="left"
          open={openSidebar}
          onClose={() => setOpenSidebar(!openSidebar)}
        >
          <div className="flex h-full text-white">
            <Sidebar />
          </div>
        </Drawer>
      </div>
    </div>
  );
};
