import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Button from '@material-ui/core/Button'

export default class Reaction extends React.Component {
  state = {
    copied: false,
  };
 
  render() {
    return (
      <div className="reaction-bar">
 
        <CopyToClipboard text={'https://mmscience-2019.firebaseapp.com/' + this.props.path}
          onCopy={() => this.setState({copied: true})}>
          <Button variant="outlined">
            <FileCopyIcon />
          </Button>
        </CopyToClipboard>
 
        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
      </div>
    );
  }
}