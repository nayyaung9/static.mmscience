import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'gatsby';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [title, setTitle] = React.useState('select type');

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    
  }, []);
  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} variant="contained" color="inherit" fullWidth>
        {title}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to='/wiki/'>feed</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to='/wiki/new/'>Recently published</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to='/wiki/short-story/'>Shortest time to read</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}