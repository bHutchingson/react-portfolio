import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '64px'
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btn: {
    color: 'white'
  },
  title: {
    flexGrow: 1,
  },
});

export default useStyles;