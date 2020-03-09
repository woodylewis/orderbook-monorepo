import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Store } from './components/Store/Store';
import Controller from './components/Controller/Controller';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Store>
          <Controller />
        </Store>
      </Container>
    </React.Fragment>
  );
};

export default App;
