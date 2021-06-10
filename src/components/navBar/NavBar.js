import React from 'react'
import { Link } from "react-router-dom"; 
import { AppBar, Toolbar, Typography, IconButton, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit">
          <Link 
              to="/discover"
              className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
            >
              Projects
          </Link>
        </Button>
        <Button color="inherit">
          <Link 
              to="/discover"
              className={window.location.pathname === "/skills" ? "nav-link active" : "nav-link"}
            >
              Skills
          </Link>
        </Button>
        <Button color="inherit">
          <Link 
              to="/discover"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
