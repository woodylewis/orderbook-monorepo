import React, { FunctionComponent } from 'react';
import { Route, HashRouter, Switch, Link } from 'react-router-dom';

import OrderBook from '../OrderBook/OrderBook';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './Controller-styles';

const Controller: FunctionComponent = () => {
  const classes = useStyles({});

  return (
    <React.Fragment>
      <CssBaseline />
      <HashRouter>
        <div className={classes.root}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12}>
              <Typography className={classes.topTitle}>
                <Link to="/" className={classes.link}>
                  Central Limit Order Book
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <Switch>
            <Route exact path="/" component={OrderBook} />
          </Switch>
        </div>
      </HashRouter>
    </React.Fragment>
  );
};

export default Controller;
