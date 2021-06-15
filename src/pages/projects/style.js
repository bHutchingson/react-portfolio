import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  projectContainer: {
    display: 'flex',
    height: '100%',
    width: '60%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  projectGrid: {
    display: 'flex',
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  projectCard: {
    display: 'flex',
    width: '100%'
  }
});

export default useStyles;