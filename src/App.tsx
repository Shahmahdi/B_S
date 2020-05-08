import React from "react";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

function App() {
  return (
    <div className="flex w-full h-screen">
      <div className="flex w-260px text-white">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1">
        <AppBar position="static">
          <Toolbar className="bg-white text-gray-400">
            <IconButton edge="start" color="inherit" aria-label="menu">
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
          Box page
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
