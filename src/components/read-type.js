import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'gatsby'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret color="success">
          {this.props.type}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <Link to='/wiki/new'>Recently published</Link>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <Link to='/wiki/short-story'>Shortest time to read</Link>
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}