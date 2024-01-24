import './HeaderMobile.scss';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

export default function HeaderMobile() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dinoto
          </Typography>
          <MenuItem>
            <Link to="https://github.com/jonathanbensadoun" target="_blank">
              <GitHubIcon />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="https://www.linkedin.com/in/jonathan-bensadoun/"
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
