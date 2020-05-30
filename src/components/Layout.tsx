import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { Sidebar } from "./Sidebar";

export const Layout = (props: { component: any }) => {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <div className="flex w-full h-screen">
      <div className={`hidden md:flex`}>
        <div className={`${openSidebar ? "flex" : "hidden"} w-260px text-white`}>
          <Sidebar />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <AppBar position="static">
          <Toolbar className="bg-white text-gray-400">
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpenSidebar(!openSidebar)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="flex-1">
              Box Page
            </Typography>
            <Button color="inherit" startIcon={<PowerSettingsNewIcon />} />
          </Toolbar>
        </AppBar>
        <div
          className=""
          style={{
            padding: "40px",
            flex: "1 1 0%",
            background: "rgb(247, 249, 252)",
          }}
        >
          {/* Box page
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Button
          </button> */}
          {props.component()}
        </div>
      </div>
      <div className={`flex md:hidden`}>
        <Drawer
          className="flex md:hidden"
          anchor="left"
          open={openSidebar}
          onClose={() => setOpenSidebar(!openSidebar)}
        >
          <div className={`flex h-full text-white`}>
            <Sidebar />
          </div>
        </Drawer>
      </div>
    </div>
  );
};
