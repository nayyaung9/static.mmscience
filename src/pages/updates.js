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
        <ul>
          <li>
            Copy post link and share <br/>
            see below example <Link to='https://mmscience-2019.firebaseapp.com/mechanics/artificial-intelligence/'>
            ကမ္ဘာမှာ နည်းပညာတွေ အမျိုးမျိုး ပေါ်ခဲ့တာ ဘာလို့ AI ကျမှ တချို့ ပညာရှင်တွေက စိုးရိမ်နေကြတာလဲ
            </Link>
          </li>
        </ul>
      </main>
    </Layout>
  )
}