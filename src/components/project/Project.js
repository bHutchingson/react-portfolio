import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useStyles from "./style";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Project = (props) => {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  return (
  <div className={classes.projectCard}>
    <Card data-aos="fade-up" className={classes.root}>
      <div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            {props.desc}
        </Typography>
          <Grid container spacing={1}>
            <Grid className={classes.cardContainer} item xs={4}>
              <Paper item className={`${classes.root} ${classes.skillItem}`}></Paper>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size="small" target="_blank" href={props.code} color="primary">
            View Code
            </Button>
          <Button size="small" target="_blank" href={props.deployed} color="primary">
            Deployed Project
          </Button>
        </CardActions>
      </div>
    </Card>
  </div>
  )
}

export default Project
