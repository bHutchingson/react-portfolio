import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';



const colorGrey = blueGrey[100];

const useStyles = makeStyles({
  root: {
    display: 'flex',
    borderWidth: '.1px', 
    borderStyle: 'solid', 
    borderColor: 'rgb(255, 255, 255, .6)',
    flexDirection: 'column',
    width: 500,
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    backdropFilter: "blur(8px)",
    background: 'linear-gradient(top left, rgb(255, 255, 255, .4), rgb(255, 255, 255, .05))',
  },
  background: {
    backgroundImage: 'url("../../images/background.png")'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  about: {
    display: 'flex',
    fontSize: 20
  },
  text: {
    display: 'flex'
  },
  contactBtn: {
    display: 'flex',
  },
  btn: {
    fontSize: 15,
    backgroundColor: '#3f51b5',
    color: 'white',
    "&:hover": {
      backgroundColor: '002984',
    }
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
  }
});

export default useStyles;