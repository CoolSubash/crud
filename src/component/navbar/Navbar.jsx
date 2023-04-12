import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/createpost">Create Post</Link>
        </li>
        <li>
          <Link to="/posts">Gallery</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
