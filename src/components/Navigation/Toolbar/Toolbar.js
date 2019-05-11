import React from 'react'

import Logo from '../../Logo/Logo'
import classes from './Tooldbar.module.css'

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <Logo />
      <nav>
        <ul>
          ...
        </ul>
      </nav>
    </header>
  )
}

export default toolbar
