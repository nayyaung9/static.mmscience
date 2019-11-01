import React from 'react'
import Layout from '../components/layout'
import Typography from '@material-ui/core/Typography';

export default () => (
  
    <Layout>
      <Typography variant="h2" gutterBottom>About</Typography>
      <Typography paragraph>
          MMScience is a online library website for Myanmar High School Students.
          We are going to build this website in community.
      </Typography>
      <Typography variant="body1">
        Contribute at: <a href='https://github.com/nayyaung9' style={{ color: 'blue'}} alt="project's contribution">Github</a>
      </Typography>
    </Layout>
  
)