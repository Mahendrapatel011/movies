import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#333' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mahen's Movie Streaming
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">SignUp</Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: 'flex',
          padding: '10px 0',
          borderBottom: '1px solid #ddd',
        }}
      >
        <ul className="nav-list" style={{ listStyleType: 'none', display: 'flex', margin: 0, padding: 0 }}>
          <li style={{ margin: '0 15px' }}>
            <NavLink 
              to="/" 
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? 'blue' : 'inherit',
                fontWeight: isActive ? 'bold' : 'normal',
              })}
            >
              Home
            </NavLink>
          </li>
          <li style={{ margin: '0 15px' }}>
            <NavLink 
              to="/about" 
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? 'blue' : 'inherit',
                fontWeight: isActive ? 'bold' : 'normal',
              })}
            >
              About
            </NavLink>
          </li>
          <li style={{ margin: '0 15px' }}>
            <NavLink 
              to="/movie" 
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? 'blue' : 'inherit',
                fontWeight: isActive ? 'bold' : 'normal',
              })}
            >
              Movies
            </NavLink>
          </li>
          <li style={{ margin: '0 15px' }}>
            <NavLink 
              to="/contact" 
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? 'blue' : 'inherit',
                fontWeight: isActive ? 'bold' : 'normal',
              })}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </Box>
    </>
  );
};
