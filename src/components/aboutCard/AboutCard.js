import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Button, useMediaQuery, useTheme } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import useStyles from './styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Aos from 'aos';
import 'aos/dist/aos.css';

const skillsArray = [
  'Html',
  'CSS',
  'Javascript',
  'JQuery',
  'MongoDB',
  'MySQL',
  'Node.js',
  'Express.js',
  'Bootstrap',
  'Material UI',
  'Handlebars.js',
  'React.js',
]

const SimpleCard = () => {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={classes.aboutPage}>
      <div data-aos="fade-up" className={classes.cardContainer}>
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
      </div>
      <div data-aos="slide-up" className={classes.grid}>
        <Grid className={classes.cardContainer} container spacing={2} >
          {skillsArray.map(skill => {
            return (
              <Grid className={classes.cardContainer} key={skill} item xs={4}>
                <Paper item className={`${classes.root} ${classes.skillItem}`}>{skill}</Paper>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </div>
  );
}

export default SimpleCard;