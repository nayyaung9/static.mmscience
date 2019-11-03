import React, { Component } from "react"
import TextField from '@material-ui/core/TextField'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import { Index } from "elasticlunr"
import { Link } from 'gatsby'
import { Badge } from 'reactstrap'

// SearchList component
export default class SearchList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
   
  }

  render() {
    console.log(this.props.features)
    return (
			<Layout style={{ marginTop: '80px'}}>
				<div 
        css={css`
          background: #fff;
          border-radius: 0.5rem;
          padding: 10px;
        `}>
					<TextField
						id="outlined-basic"
						label="Search articles"
						variant="outlined"
						fullWidth={true}
						defaultValue={this.state.query}
						onChange={this.search}
					/>
				</div>
					
					<div style={{ marginTop: '30px' }}>
						{this.state.results.map(page => (
						

              <div 
              key={page.id}
              css={css`
                padding: 10px;
                background: #fff;
                border-radius: 0.5rem;
              `}>
	            <Link to={"/" + page.path}>{page.title}</Link> <br />
                <Badge color="success">
                  { page.tags.join(`,`) }
                </Badge>
               
                
                by {page.author}
              </div>
						))}
					</div>

          <div style={{ marginTop: '30px'}}>
            {/* {this.props.features.map(({node}) => (
              <h1>{node.frontmatter.title}</h1>
            ))} */}
            <h1>Suggested articles</h1>
          </div>
				</Layout>
     
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, {})
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}

