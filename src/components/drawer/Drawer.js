import React, { useState } from 'react';
import { Drawer, ListItemIcon, IconButton, Button } from '@material-ui/core'
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from "./style";



const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const classes = useStyles;

  //page options for navbar
  const navLinks = ["About", "Projects", "Contact"]

  return (
    <>
      <Drawer anchor="right" onClose={() => setOpenDrawer(false)} open={openDrawer}>
        <List>
          {navLinks.map(link => {
            return (
              <ListItem key={link} divider button component={Link} to={`/${link}`}>
                <ListItemIcon>
                  <ListItemText>{link}</ListItemText>
                </ListItemIcon>
              </ListItem>
            )
          })}
        </List>
      </Drawer>
      <IconButton edge="start" onClick={(() => setOpenDrawer(!openDrawer))} className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
    </>
  )
}

export default DrawerComponent
