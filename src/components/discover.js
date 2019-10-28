import React from 'react';
import { Link } from 'gatsby';
import kebabCase from "lodash/kebabCase"
import { Progress } from 'reactstrap';
import { css } from '@emotion/core'

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default ({ tags }) => {
  return (
    <div>
          {tags.map(tag => (
                <div className="col-md-4" key={tag.fieldValue} style={{ marginTop: '20px' }}>
                  <div  key={tag.fieldValue}>
                 
                  <Link 
                    to={`/${kebabCase(tag.fieldValue)}/`}
                    css={css`
                      color: #1ca086;
                      text-decoration: none;
                  `}>
                  {tag.fieldValue}
                  </Link> 
                 

              
                     
                 
                  
                  </div>
                
                </div>

             
              ))}
    </div>
  )
}