import React from 'react'
import useStyles from "./style";
import { AppBar, Toolbar, Typography, IconButton, Button, useMediaQuery, useTheme } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Icon from '@material-ui/core/Icon';


function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.contactContainer}>
      <Card className={classes.root}>
          <CardContent className={classes.content}>
            <Typography className={classes.text} variant="h5" component="h2" gutterBottom>
              Contact
          </Typography>
            <Typography className={classes.about} variant="body2" component="p">
              What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
          </Typography>
          </CardContent>
          <CardActions className={classes.contactBtn}>
            <Button className={classes.btn} target="_blank" href="https://github.com/bHutchingson" variant="primary" size="large"><GitHubIcon></GitHubIcon></Button>
            <Button className={classes.btn} target="_blank" href="mailto:HutchingsonB@gmail.com" variant="primary" size="large"><EmailIcon></EmailIcon></Button>
            <Button className={classes.btn} target="_blank" href="https://www.linkedin.com/in/brandon-hutchingson-a842b2181/" variant="primary" size="large"><LinkedInIcon></LinkedInIcon></Button>
            <Button className={classes.btn} target="_blank" variant="primary" size="medium">Resume</Button>
          </CardActions>
        </Card>
    </div>
  )
}

export default Contact
