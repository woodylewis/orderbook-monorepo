import React, {
  FunctionComponent,
  useState,
  useEffect,
  useContext,
} from 'react';

import { interval } from 'rxjs';

import { AppContext } from '../Store/Store';
import { Message, Order } from '../../types';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './OrderBook-styles';

const OrderBook: FunctionComponent = () => {
  const classes = useStyles({});
  // eslint-disable-next-line
  const [bids, setBids] = useState<Array<Order>>([]);
  const [loaded, setLoaded] = useState(false);
  const context = useContext(AppContext);

  useEffect(() => {
    context.sendMessage(Message.PULL_BOOK);
    setBids(context.foundBids);
    const refresh = interval(1000);
    refresh.subscribe(() => {
      setBids(context.foundBids);
      if (!loaded) {
        setLoaded(true);
      }
    });
    // eslint-disable-next-line
  }, [context]);

  return (
    <React.Fragment>
      <CssBaseline />
      {!loaded && <CircularProgress></CircularProgress>}
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={3} className={classes.cellWrapper}>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
              >
                <Grid item xs={12} className={classes.headerCell}>
                  BIDS
                </Grid>
                {context.foundBids.map((bid, index) => (
                  <Grid item key={index}>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <Grid
                        item
                        xs={6}
                        className={
                          index === context.foundBids.length - 1
                            ? classes.leftBottomCell
                            : classes.leftCell
                        }
                      >
                        {bid.quantity}
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        className={
                          index === context.foundBids.length - 1
                            ? classes.rightBottomCell
                            : classes.rightCell
                        }
                      >
                        {bid.limit}
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
    </React.Fragment>
  );
};

export default OrderBook;
