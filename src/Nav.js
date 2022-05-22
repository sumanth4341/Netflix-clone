import React from 'react'
import './Nav.css'
function Nav() {
  return (
    <div className='nav'>
      <img 
      className='nav__logo'
      src="Netflix_Logo.png"
      alt='Netflix Logo'
      /> 
      <img 
      className='nav__avatar'
      src='user.png'
      alt='Netflix Logo'
      />
    </div>
  )
}


export default Nav;
