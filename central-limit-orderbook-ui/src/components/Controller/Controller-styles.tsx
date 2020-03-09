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
  topTitle: {
    color: 'royalblue',
    fontSize: '32px',
    marginTop: theme.spacing(6),
    textAlign: 'center',
  },
  linkBar: {
    color: 'royalblue',
    fontSize: '16px',
    textAlign: 'center',
    margin: theme.spacing(4),
  },
}));

export default useStyles;
