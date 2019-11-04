import React from 'react';
import Navbar from './navbar';

// Material-ui
import Container from '@material-ui/core/Container';

export default ({ children }) => (
  <React.Fragment>
    
    <Navbar/>

    <Container maxWidth="md" style={{ padding: '0 !important'}}>
      {children}
    </Container>
  </React.Fragment>
);