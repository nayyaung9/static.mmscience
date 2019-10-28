import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import '../styles/global.css'
import BlogPost from '../assets/blog-post-item.png'
import CategoryImg from '../assets/discover.png'

export default () => {
  return (
    <React.Fragment>
      <div css={css`
        background-color: #fff;
        padding: 30px;
        text-align: center;
      `}>
        <Typography variant="h5" 
          gutterBottom
          css={css`
            font-weight: bold;
        `}>
          လမ်းညွှန်
        </Typography>

        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <img src={BlogPost} width="20%"/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography paragraph>
                wiki ( ကဏ္ဍစုံစာမျက်နှာ ) သို့သွားလိုပါက <br />
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography paragraph>
                Discover ( ကဏ္ဌအလိုက် ခွဲခြားမှု စာမျက်နှာ ) သို့
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={CategoryImg} width="20%" />
            </Grid>
          </Grid>
        </Container> 

      </div>
       <div css={css`
        background-color: #151515;
        color: #FBC403;
        padding: 40px;
        text-align: center;
      `}>
        <Typography variant="h4" gutterBottom>
          mm science
        </Typography>
        <Typography variant="h6"
        css={css`
          margin: 0;
        `}>
          An online library website for Myanmar Education
        </Typography>
      </div> 
      <div css={css`
        background-color: #fff;
        padding: 40px;
        text-align: center;
        margin-bottom: 30px auto;
      `}>
        <Typography variant="h5">
          Read More in Discover
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
    </React.Fragment>
  )
};