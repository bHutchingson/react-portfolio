import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Button, useMediaQuery, useTheme } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import useStyles from './styles';



const SimpleCard = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return ( <>
    <div className={classes.backdrop}></div>
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography variant="h5" component="h2" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body2" component="p">
          
        </Typography>
      </CardContent>
      <CardActions className={classes.contactBtn}>
        <Button size="small">Contact Me</Button>
      </CardActions>
    </Card>
  </>
  );
}

export default SimpleCard;