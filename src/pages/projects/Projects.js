import React from 'react'
import Project from '../../components/project/Project';
import useStyles from "./style";
import Grid from '@material-ui/core/Grid';
import { DriveEtaRounded } from '@material-ui/icons';

const projectsArray = [
  { 
    id: '1',
    Title: 'Employee Directory',
    Description: 'A searchable table of users, using the RandomUser API. Created with React.js',
    GitHub: 'https://github.com/bHutchingson/employee-directory',
    Deployed: 'https://bhutchingson.github.io/employee-directory/',
    Technologies: [
      'React.js',
      'Axios',
      'Bootstrap'
    ]
  },
  {
    id: '2',
    Title: 'Fitness Tracker',
    Description: 'This project allows users to add exercises and workouts and then displays total workout information for the last 7 days.',
    GitHub: 'https://github.com/bHutchingson/fitness-tracker',
    Deployed: 'https://rocky-chamber-26638.herokuapp.com/?id=60ad514df01a0c0004ad06ca',
    Technologies: [
      'Express.js',
      'Node.js',
      'MongoDB',
      'Bootstrap'
    ]
  },
  {
    id: '3',
    Title: 'Budget Tracker',
    Description: 'The Budget Tracker allows users to enter expenses and displays their total budget as well as a graph of the information. This application works both online and offline.',
    GitHub: 'https://github.com/bHutchingson/budget-tracker',
    Deployed: 'https://rocky-peak-05306.herokuapp.com/',
    Technologies: [
      'Express.js',
      'Node.js',
      'MongoDB',
      'IndexedDB'
    ]
  },
  {
    id: '4',
    Title: 'Tidder Blog',
    Description: 'This project is a reddit style forum. Allowing users to signup/login, create channels for posting, make blog posts, and comment on other users posts.',
    GitHub: 'https://github.com/bHutchingson/budget-tracker',
    Deployed: 'https://rocky-peak-05306.herokuapp.com/',
    Technologies: [
      'Express.js',
      'Node.js',
      'MySQL',
      'Handlebars.js'
    ]
  }
]

function Projects() {
  const classes = useStyles();

  return (
    <Grid spacing={1} container className={classes.projectContainer}>
      {projectsArray.map(project => {
      return (
        <Grid className={classes.projectGrid} item xs={12} sm={6} >
          <Project className={classes.projectCard} title={project.Title} desc={project.Description} code={project.GitHub} deployed={project.Deployed}/>
        </Grid>
      )
      })}
    </Grid>
  )
}

export default Projects
