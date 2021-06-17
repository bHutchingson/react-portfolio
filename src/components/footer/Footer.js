import React from 'react';
import useStyles from './style';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Pdf from "../../images/resume.pdf";


const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.footer} position="static">
          <Button className={classes.btn} target="_blank" href="https://github.com/bHutchingson" variant="primary" size="large"><GitHubIcon></GitHubIcon></Button>
          <Button className={classes.btn} target="_blank" href="mailto:HutchingsonB@gmail.com" variant="primary" size="large"><EmailIcon></EmailIcon></Button>
          <Button className={classes.btn} target="_blank" href="https://www.linkedin.com/in/brandon-hutchingson-a842b2181/" variant="primary" size="large"><LinkedInIcon></LinkedInIcon></Button>
          <Button className={classes.btn} target="_blank" href={Pdf} variant="primary" size="medium">Resume</Button>
      </AppBar>
    </div>
  );
}

export default Footer;