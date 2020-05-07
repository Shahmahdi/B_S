import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import SettingsIcon from '@material-ui/icons/Settings';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import PersonIcon from '@material-ui/icons/Person';

export const Sidebar = () => {
  return (
    <List 
      className="flex flex-column w-100" 
      style={{ padding: 0 }}
    >
      <ListItem 
        style={{ 
          backgroundColor: 'rgb(0, 105, 92)', 
          minHeight: '64px' 
        }}>
        <LocalLibraryIcon 
          style={{ 
            width: '40px', 
            paddingRight: '6px', 
            fontSize: '2rem' }} />
        <ListItemText
          primary={
            <span
              style={{
                fontSize: '1.3rem',
                fontWeight: 'bold',
                paddingTop: '6px',
                paddingLeft: '0px'
              }}
            >
              ISP Management
            </span>
          }
        />
      </ListItem>
      <List
        style={{
          flex: 1,
          backgroundColor: 'rgb(0, 121, 107)'
        }}
      >
        <ListItem>
          <DeviceHubIcon style={{ width: '40px', paddingRight: '6px', opacity: 0.5 }} />
          <ListItemText primary={<span style={{
            fontSize: '15px',
            fontWeight: 'lighter',
            padding: '0px 6px'
          }}>Boxes</span>} />
        </ListItem>
        <ListItem>
          <SettingsIcon style={{ width: '40px', paddingRight: '6px', opacity: 0.5 }} />
          <ListItemText primary={<span style={{
            fontSize: '15px',
            fontWeight: 'lighter',
            padding: '0px 6px'
          }}>Settings</span>} />
        </ListItem>
      </List>
      <ListItem style={{ backgroundColor: 'rgb(0, 105, 92)' }}>
        <PersonIcon style={{ width: '40px', paddingRight: '6px' }} />
        <ListItemText
          primary="Shah Arfan Mahdi"
          secondary={
            <span style={{ fontSize: '13px', color: 'white' }}>Software Engineer</span>
          }
        />
      </ListItem>
    </List>
  )
}
