import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Progress } from 'reactstrap';
import classnames from 'classnames';
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import { css } from '@emotion/core'
import '../styles/global.css'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1'
    };
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Topics
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Upcoming
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <div className="row">
     
              {this.props.tags.map(tag => (
                <div className="col-md-4" key={tag.fieldValue} style={{ marginTop: '20px' }}>
                  <div className="global__space" key={tag.fieldValue}>
                  <Link 
                    to={`/${kebabCase(tag.fieldValue)}/`}
                    css={css`
                      color: #1ca086;
                      text-decoration: none;
                  `}>
           
                      <b>{tag.fieldValue}</b> <br />
                      <Progress color="success" value={tag.totalCount + 5} />
                 
                  </Link>    
                  </div>
                </div>
              ))}

            </div>

          </TabPane>
          <TabPane tabId="2">
            <Row>

              {/* Upcoming posts are here */}

            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}