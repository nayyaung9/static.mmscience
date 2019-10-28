import React from 'react';
import Navbar from './navbar';

// Material-ui
import Container from '@material-ui/core/Container';

export default ({ children }) => (
  <React.Fragment>
    <Navbar/>

    <Container maxWidth="md">
      <main style={{ margin: '80px auto'}}>
        {children}
      </main>
    </Container>
  </React.Fragment>
);