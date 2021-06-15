import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';



const colorGrey = blueGrey[100];

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 500,
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    backdropFilter: "blur(4px)",
    background: 'rgb(244, 239, 239, 0.5)',
  },
  background: {
    backgroundImage: 'url("../../images/background.png")'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  about: {
    display: 'flex'
  },
  text: {
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
  /* backdrop1: {
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    backgroundColor: '#798CF7',
    zIndex: -1,
    position: 'fixed',
    border: 'white',
    left: '65%',
    top: '30%'
  }, */
  backdrop2: {
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    backgroundColor: '#6FCEFC',
    zIndex: -2,
    position: 'fixed',
    border: 'white',
    left: '70%',
    top: '50%'
  },
  backdrop3: {
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    backgroundColor: '#A66FFC',
    zIndex: -3,
    position: 'fixed',
    border: 'white',
    left: '40%',
    bottom: '30%'
  },
  backdrop4: {
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    backgroundColor: '#7163E0',
    zIndex: -4,
    position: 'fixed',
    border: 'white',
    left: '20%',
    bottom: '65%'
  },
  backdrop5: {
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    backgroundColor: '#6397E0',
    zIndex: -5,
    position: 'fixed',
    border: 'white',
    left: '10%',
    bottom: '10%'
  }

});

export default useStyles;