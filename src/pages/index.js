import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"


export default () => (
  <Layout>
    
    <span>view courses 
      <Link to='discover'>
        courses
      </Link>
    </span>
  </Layout>
)