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
        <ul style={{ color: 'var(--appBar-text)' }}>
          <li>
            Copy post link and share <br/>
            see below example <Link to='mechanics/artificial-intelligence/'>
            ကမ္ဘာမှာ နည်းပညာတွေ အမျိုးမျိုး ပေါ်ခဲ့တာ ဘာလို့ AI ကျမှ တချို့ ပညာရှင်တွေက စိုးရိမ်နေကြတာလဲ
            </Link>
          </li>
          <li>
            Include learning videos <br />
            see below <Link to='videos'></Link>
          </li>
        </ul>
      </main>
    </Layout>
  )
}