import React, { useState } from 'react';
import { Drawer } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(true)

  return (
    <Drawer onClose={() => setOpenDrawer(false)} open={openDrawer}>
      <List>
        <ListItem>
          <ListItemText>About</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default DrawerComponent
