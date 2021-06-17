import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    borderWidth: '.1px', 
    borderStyle: 'solid', 
    borderColor: 'rgb(255, 255, 255, .6)',
    flexDirection: 'column',
    width: '50%',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    backdropFilter: "blur(8px)",
    background: 'linear-gradient(top left, rgb(255, 255, 255, .4), rgb(255, 255, 255, .05))',
    marginBottom: 50
  },
  contactContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
});

export default useStyles;