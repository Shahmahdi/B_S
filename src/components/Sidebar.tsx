import React, { useState } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import SettingsIcon from "@material-ui/icons/Settings";
import DeviceHubIcon from "@material-ui/icons/DeviceHub";
import PersonIcon from "@material-ui/icons/Person";
import { withRouter } from "react-router-dom";

export const Sidebar = withRouter((props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <List className="flex flex-col w-full" disablePadding={true}>
      <ListItem className="cursor-pointer bg-sidebarDeep h-16">
        <LocalLibraryIcon fontSize="large" />
        <span className="font-bold pl-2 pt-1 text-xl">ISP Management</span>
      </ListItem>
      <List component="nav" className="flex-1 bg-sidebarLight">
        <ListItem
          className={`cursor-pointer ${selectedIndex === 0 && "bg-sidebarSelected"}`}
          onClick={() => {
            setSelectedIndex(0);
            props.history.push("/");
          }}
        >
          <DeviceHubIcon className="pr-1 opacity-50" style={{ width: "40px" }} />
          <ListItemText
            primary={<span className="font-light px-1 text-base">Boxes</span>}
          />
        </ListItem>
        <ListItem
          className={`cursor-pointer ${selectedIndex === 1 && "bg-sidebarSelected"}`}
          onClick={() => {
            setSelectedIndex(1);
            props.history.push("/settings");
          }}
        >
          <SettingsIcon className="pr-1 opacity-50" style={{ width: "40px" }} />
          <ListItemText
            primary={<span className="font-light px-1 text-base">Settings</span>}
          />
        </ListItem>
      </List>
      <ListItem className="bg-sidebarDeep">
        <PersonIcon className="pr-2" style={{ width: "40px" }} />
        <ListItemText
          primary="Shah Arfan Mahdi"
          secondary={
            <span className="text-white text-sm" style={{ fontSize: "13px" }}>
              Software Engineer
            </span>
          }
        />
      </ListItem>
    </List>
  );
});
