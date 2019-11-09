import React from 'react'
import Layout from '../components/layout'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'

export default () => {
  return (
    <Layout>
      <main style={{ marginTop: '70px '}}>
        <Typography variant="h5" gutterBottom>
          Updates v2
        </Typography>
      </main>
    </Layout>
  )
}