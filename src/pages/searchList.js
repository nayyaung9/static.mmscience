import React, { Component } from "react"
import TextField from '@material-ui/core/TextField'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import { Index } from "elasticlunr"
import { Link } from 'gatsby'

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
							defaultValue={this.state.title}
							onChange={this.search}
						/>

					</div>
					
					<ul>
						{this.state.results.map(page => (
							<li key={page.id}>
								<Link to={"/" + page.path}>{page.title}</Link>
                {": " + page.tags.join(`,`)}
                {console.log(page)}
                by {page.author}
							</li>
						))}
					</ul>
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