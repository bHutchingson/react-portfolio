import React, { useState } from 'react';
import { Drawer, ListItemIcon, IconButton } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from "./style";



const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <Drawer anchor="right" onClose={() => setOpenDrawer(false)} open={openDrawer}>
        <List>
          <ListItem divider button>
            <ListItemIcon>
              <ListItemText>About</ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button>
            <ListItemIcon>
              <ListItemText>Projects</ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button>
            <ListItemIcon>
              <ListItemText>Skills</ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button>
            <ListItemIcon>
              <ListItemText>Contact</ListItemText>
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <IconButton edge="start" onClick={(() => setOpenDrawer(!openDrawer))} /* className={classes.menuButton} */ color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
    </>
  )
}

export default DrawerComponent
