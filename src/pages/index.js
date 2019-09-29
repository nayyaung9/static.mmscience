import React from "react"
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import Layout from "../components/layout"
import Category from '../components/category'

export default () => (
  <Layout>
    <h1>Amazing Pandas Eating Things</h1>
    <span>view courses 
      <Link to='tags'>
        courses
      </Link>
    </span>
  </Layout>
)