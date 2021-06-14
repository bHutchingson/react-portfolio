import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';



const colorGrey = blueGrey[100];

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 500,
    /* backgroundColor: colorGrey, */
    backdropFilter: "blur(2px)",
    background: 'rgb(219, 219, 219, 0.6)',
  
  },
  content: {
    display: 'flex'
  },
  contactBtn: {
    display: 'flex'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  backdrop: {
    width: '50px',
    height: '50px',
    backgroundColor: 'blue',
    zIndex: -232,
    position: 'absolute',
    right: '190px',
  }
});

export default useStyles;