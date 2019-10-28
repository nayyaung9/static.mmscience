import React from 'react';
import Navbar from './navbar';

// Material-ui
import Container from '@material-ui/core/Container';

export default ({ children }) => (
  <React.Fragment>
    <Navbar/>

    <Container maxWidth="md">
      <main style={{ marginTop: '80px'}}>
        {children}
      </main>
    </Container>
  </React.Fragment>
);