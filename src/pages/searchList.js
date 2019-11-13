import React, { Component } from "react"
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { css } from '@emotion/core'
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
    return (
      <React.Fragment>
        <Typography variant="h6" style={{ color: 'var(--appBar-text)'}}  >Suggested words</Typography>
        <div
          className="tags_scrollbar"
          css={css`
            overflow: auto;
            white-space: nowrap;
        `}>
        
          {this.props.words && this.props.words.map((tag) => (
            <div
              key={tag.fieldValue}
              css={css`
                display: inline-block;
                text-align: center;
                text-decoration: none;
                margin: 10px 2px 20px 2px;
            `}>
              <button 
                style={{ backgroundColor: 'var(--appBar-bg)', color: 'var(--appBar-text)'}}  
                value={tag.fieldValue} 
                onClick={this.searchText}
                className="suggestedWords"
              >
                {tag.fieldValue}
              </button>
            </div>
          ))}
        </div>
        

				<div 
        css={css`
          background: #fff;
          border-radius: .25rem;
        `}>
					<TextField
						id="outlined-basic"
						label="Search articles"
						variant="filled"
						fullWidth={true}
            defaultValue={this.state.query}
            value={this.state.query}
						onChange={this.search}
					/> 
				</div>
					
				<div style={{ margin: '30px 0' }}>
					{this.state.results.map(page => (
            <div 
            key={page.id}
            style={{ backgroundColor: 'var(--appBar-bg)' }}
            css={css`
              padding: 10px;
              border-radius: 0.5rem;
              margin-bottom: 10px;
              box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
            `}>
              <Link 
                to={"/" + page.path} 
                alt={page.title} 
                aria-label={page.title}
                style={{ color: 'var(--appBar-text)' }}
              >
                {page.title}
              </Link> <br />
              {page.tags.map((tag) => (
                <Badge color="info" style={{ marginRight: '3px'}}>
                  { tag }
                </Badge>
              ))}
            </div>
					))}
				</div>
      <div>
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

