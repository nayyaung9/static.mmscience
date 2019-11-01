import React from 'react'
import Switch from '@material-ui/core/Switch'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

export default class MyComponent extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
         
            <Switch 
              inputProps={{ 'aria-label': 'primary checkbox' }}
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />  
          </label>
        )}
      </ThemeToggler>
    )
  }
}