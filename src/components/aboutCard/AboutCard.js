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
import Pdf from "../../images/resume.pdf";
import Divider from '@material-ui/core/Divider';

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
              My name is Brandon, I'm a Full Stack web developer with a focus in MongoDB, Express, React, and Node.js.
              
            </Typography>
            <Divider />
            <br></br>
            <Typography className={classes.about} variant="body2" component="p">
              With a background in customer service, I use those skills to create web applications that meet requirements to fulfill user stories.
            </Typography>
            <Divider />
            <br></br>
            <Typography className={classes.about} variant="body2" component="p">
              Achieved Full Stack Web Development Certificate from The Ohio State Universtity Full Stack Bootcamp.
            </Typography>
          </CardContent>
          <CardActions className={classes.contactBtn}>
            <Button className={classes.btn} target="_blank" href={Pdf} variant="primary" size="medium">Resume</Button>
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