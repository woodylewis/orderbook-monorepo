import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    minHeight: '100vh',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  headerCell: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '24px',
    color: 'royalblue',
    borderBottom: '1px solid royalblue',
    paddingTop: theme.spacing(0.5),
  },
  leftCell: {
    width: '6rem',
    height: '2rem',
    textAlign: 'center',
    borderRight: '1px solid royalblue',
    borderBottom: '1px solid royalblue',
    paddingTop: theme.spacing(0.5),
    fontSize: '24px',
  },
  leftBottomCell: {
    width: '6rem',
    height: '2rem',
    textAlign: 'center',
    borderRight: '1px solid royalblue',
    paddingTop: theme.spacing(0.5),
    fontSize: '24px',
  },
  rightCell: {
    width: '6rem',
    height: '2rem',
    textAlign: 'center',
    borderBottom: '1px solid royalblue',
    paddingTop: theme.spacing(0.5),
    fontSize: '24px',
  },
  rightBottomCell: {
    width: '6rem',
    height: '2rem',
    textAlign: 'center',
    paddingTop: theme.spacing(0.5),
    fontSize: '24px',
  },
  cellWrapper: {
    border: '2px solid royalblue',
    margin: theme.spacing(4),
  },
  
}));

export default useStyles;
