import React, { useState } from 'react'
import { Link } from "react-router-dom"; 
import { AppBar, Toolbar, Typography, IconButton, Button, useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from "../drawer/style";
import DrawerComponent from "../drawer/Drawer";


function NavBar() {
  const classes = useStyles();
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Brandon Hutchingson
        </Typography>

        {isSmall ? 
          <>
            <DrawerComponent />
          </>
         : 
          <>
            <Button color="inherit">
          <Link 
              to="/"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About
          </Link>
        </Button>
        <Button color="inherit">
          <Link 
              to="/projects"
              className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
            >
              Projects
          </Link>
        </Button>
        <Button color="inherit">
          <Link 
              to="/skills"
              className={window.location.pathname === "/skills" ? "nav-link active" : "nav-link"}
            >
              Skills
          </Link>
        </Button>
        <Button color="inherit">
          <Link 
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
          </Link>
        </Button>
          </>
         }

        
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
