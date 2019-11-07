import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export default (props) => {
  return (
    <Container maxWidth="md" style={{ marginTop: '70px' }}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6}>
          <Typography variant="h6">
            {props.title}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6}>
          {props.totalCount}
        </Grid>
      </Grid>
  </Container>
  )
}
