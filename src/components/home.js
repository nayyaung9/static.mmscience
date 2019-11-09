import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import '../styles/global.css'
import BlogPost from '../assets/feedIcon.png'
import CategoryImg from '../assets/tagIcon.svg'
import VideoIcon from '../assets/videoIcon.svg'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


export default () => {
  const classes = useStyles();
  return (
    <React.Fragment>

    <div 
    style={{ backgroundColor: 'var(--appBar-bg)', color: 'var(--appBar-text)' }}
    css={css`
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

      <div 
      style={{ color: 'var(--appBar-text)'}}
      css={css`
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
          <Grid container spacing={3}
           direction="row"
           justify="center"
           alignItems="stretch"
           css={css`
            padding-top: 10px;
        `}>
            <Grid item xs={12} sm={4}>
              <div 
              style={{ backgroundColor: 'var(--appBar-bg)' }}
              className="navigation__board" 
              >
                <div className="navigation__item">
                  <img src={BlogPost} alt="Wiki" aria-label="wiki" className="navigation__icon"/>
                  <Divider />
                </div>
                <div className="navigation__content">
                  <Typography paragraph>
                    wiki ( ကဏ္ဍစုံစာမျက်နှာ ) 
                  </Typography>

                  <Link to='/wiki/' alt="feed" aria-label="wiki">
                    <Button variant="outlined" aria-label="learn in wiki" style={{ textAlign: 'center', backgroundColor: 'var(--appBar-bg)', color: 'var(--appBar-text)' }}>
                      Learn in Wiki
                    </Button>
                  </Link>

                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div 
                style={{ backgroundColor: 'var(--appBar-bg)' }}
                className="navigation__board" 
              >
                <div className="navigation__item">
                  <img src={VideoIcon} alt="video" aria-label="video" className="navigation__icon"/>
                  <Divider />
                </div>
                <div className="navigation__content">
                  <Typography paragraph>
                    video များကြည့်ရှုရန်
                  </Typography>

                  <Link to='/videos/' alt="feed" aria-label="feed">
                    <Button variant="outlined" aria-label="watch & learn" style={{ textAlign: 'center', backgroundColor: 'var(--appBar-bg)', color: 'var(--appBar-text)' }}>
                      watch & learn
                    </Button>
                  </Link>

                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div 
                style={{ backgroundColor: 'var(--appBar-bg)' }}
                className="navigation__board" 
              >
                <div className="navigation__item">
                  <img src={CategoryImg} alt="discover" aria-label="discover" className="navigation__icon"/>
                  <Divider />
                </div>
                <div className="navigation__content">
                  <Typography paragraph>
                    Discover ( ကဏ္ဌ ခွဲခြားမှု စာမျက်နှာ ) 
                  </Typography>

                  <Link to='/discover/' alt="feed" aria-label="discover">
                    <Button variant="outlined" aria-label="research in discover" style={{ textAlign: 'center', backgroundColor: 'var(--appBar-bg)', color: 'var(--appBar-text)' }}>
                      research in Discover
                    </Button>
                  </Link>

                </div>
              </div>
            </Grid>
          </Grid>
        </Container>

      </div>
       
   
    </React.Fragment>
  )
};