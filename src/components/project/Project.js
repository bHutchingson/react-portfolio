import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
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
    <Card data-aos="fade-left" className={classes.root}>
      <div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Project Title
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
        </Typography>
          <Grid>
            hi
          </Grid>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View Code
          </Button>
          <Button size="small" color="primary">
            Deployed Project
          </Button>
        </CardActions>
      </div>
    </Card>
  )
}

export default Project
