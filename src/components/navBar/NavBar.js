import React from 'react'
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, Button, useMediaQuery, useTheme } from "@material-ui/core";
import useStyles from "./style";
import DrawerComponent from "../drawer/Drawer";


function NavBar() {
  const classes = useStyles();
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  //page options for navbar
  const navLinks = ["About", "Projects", "Skills", "Contact"]


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
            {navLinks.map(link => {
              return (
                <Button key={link} color="inherit" className={classes.navItems}>
                  <Link to={`/${link}`}
                    className={window.location.pathname === "/" + { link } ? "nav-link active" : "nav-link"}
                  >
                    {link}
                  </Link>
                </Button>
              )
            })}
          </>
        }
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
