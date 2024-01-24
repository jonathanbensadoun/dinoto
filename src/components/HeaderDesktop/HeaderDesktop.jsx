import './HeaderDesktop.scss';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const pages = ['Home', 'Rechercher', 'Contact'];
export default function HeaderDesktop() {
  return (
    <Box sx={{ flexGrow: 1 }} className="header">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dinoto
          </Typography>
          <MenuItem>
            <Link to="/">
              <Typography textAlign="center">Home</Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/search">
              <Typography textAlign="center">Rechercher</Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="mailto:jonathan.ben-sadoun@oclock.school">
              <Typography textAlign="center">Contact</Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="https://dinotoapi.com/doc" target="_blank">
              <Typography textAlign="center">DinotoAPI</Typography>
            </Link>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
