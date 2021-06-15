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
    <div className={classes.backdrop1}></div>
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography className={classes.text} variant="h5" component="h2" gutterBottom>
          About Me
        </Typography>
        <Typography className={classes.about} variant="body2" component="p">
        What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
        </Typography>
      </CardContent>
      <CardActions className={classes.contactBtn}>
        <Button className={classes.btn} variant="primary" size="medium">Contact Me</Button>
      </CardActions>
    </Card>
  </>
  );
}

export default SimpleCard;