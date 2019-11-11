import React, { Component } from "react"
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { css } from '@emotion/core'
import { Index } from "elasticlunr"
import { Link } from 'gatsby'
import { Badge } from 'reactstrap'
import Grid from '@material-ui/core/Grid'

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
      <React.Fragment>
				<div 
        css={css`
          background: #fff;
          border-radius: 0.5rem;
          padding: 10px;
          @media screen and (max-width: 700px) { 
            padding: 0;
          }
        `}>
					<TextField
						id="outlined-basic"
						label="Search articles"
						variant="outlined"
						fullWidth={true}
            defaultValue={this.state.query}
            value={this.state.query}
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
              margin-bottom: 10px;
            `}>
              <Link 
                to={"/" + page.path} 
                alt={page.title} 
                aria-label={page.title}
              >
                {page.title}
              </Link> <br />
              <Badge color="success">
                { page.tags.join(`, `) }
              </Badge>
            </div>
					))}
				</div>
      <div>
      
      <Typography>suggested tags</Typography>
      {this.props.words && this.props.words.edges.map(({node}) => (
        <div style={{ display: 'inline'}}>
          {node.frontmatter.searchKeywords.map((index) => (
            <button style={{ margin: '0 10px 10px 0', padding: '5px'}} value={index} onClick={this.searchText}>
              {index}
            </button>
          ))}
        </div>
      ))}

      {this.props.words && this.props.words.group.map((tag) => (
          <Badge color="secondary" style={{ margin: '0 10px 10px 0', padding: '5px'}} value={tag.fieldValue} onClick={this.searchText}>
          {tag.fieldValue}
        </Badge>
      ))}
         
 </div>
				</React.Fragment>
     
    )
  }

  searchText = e => {
    e.preventDefault();
    this.setState({
      query: e.target.value
    })
    this.search(e)
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

