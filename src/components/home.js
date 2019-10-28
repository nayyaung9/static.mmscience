import React from 'react'
import { css } from '@emotion/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

export default () => {
  return (
    <div css={css`
      background-color: #fff;
      padding: 40px;
      text-align: center;
      margin: 30px auto;
    `}>
      <Typography variant="h5">
        Read More Our Story
      </Typography>
      <Typography paragraph>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn
      </Typography>

      <Container maxWidth="sm">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Button variant="outlined" color="primary">Learn more</Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="primary">Learn more</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
};