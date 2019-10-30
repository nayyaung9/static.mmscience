import React from 'react';
import Navbar from './navbar';
import { css } from '@emotion/core'
// Material-ui
import Container from '@material-ui/core/Container';

export default ({ children }) => (
  <React.Fragment>
    <Navbar/>

    <Container maxWidth="md" 
    css={css`
      @media screen and (max-width: 700px) {
        padding: 13px !important;
      }
    `}>
      <main style={{ marginTop: '80px'}}>
        {children}
      </main>
    </Container>
  </React.Fragment>
);