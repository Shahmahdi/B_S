import React from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

function App() {
  return (
    <div className="flex w-100 vh-100">
      <div className="flex" style={{ width: '260px', color: 'white' }}>
        <Sidebar />
      </div>
      <div className="flex flex-column flex-auto">
        <AppBar position="static"
          style={{
            color: 'rgb(158, 158, 158)',
            boxShadow: 'rgba(53, 64, 82, 0.05) 0px 0px 14px 0px',
            background: 'rgb(255, 255, 255)'
          }}
        >
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="flex-auto">
              Box Page
            </Typography>
            <Button
              color="inherit"
              startIcon={<PowerSettingsNewIcon />}
            />
          </Toolbar>
        </AppBar>
        <div
          style={{
            padding: '40px',
            flex: '1 1 0%',
            background: 'rgb(247, 249, 252)'
          }}
        >
          Box page
        </div>
      </div>
    </div>
  );
}

export default App;
