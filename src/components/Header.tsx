// filepath: c:\repo\ingridswebsite\src\components\Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          🌿 Ingrid's Website
        </Typography>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'secondary.light' : 'inherit', // Highlight active link
            marginRight: '16px',
            fontWeight: isActive ? 'bold' : 'normal', // Optional: Bold active link
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'secondary.light' : 'inherit',
            marginRight: '16px',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'secondary.light' : 'inherit',
            marginRight: '16px',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'secondary.light' : 'inherit',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          Contact
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;