import React from 'react'
import UserContainer from './UserContainer'

const NavLinks = ({ user, logout }) => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
      </ul>
      <UserContainer user={user} logout={logout} />
    </div>
  )
}

export default NavLinks
