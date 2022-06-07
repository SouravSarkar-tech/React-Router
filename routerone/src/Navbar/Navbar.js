import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
const Navbar = () => {
  return (
    <div>
      <header>
          <nav>
              <div className="brand">
                 <img src="../images/Web-Design-PNG-Image.png" alt="hosting" />
                      <a>Company</a>
              <ul>
                  <li>
                      <NavLink className='navlink' to = "/">Home</NavLink>
                  </li>
                  <li>
                      <NavLink  className='navlink' to = "/about">About</NavLink>
                  </li>
                  <li>
                      <NavLink className='navlink' to = "/contact">Contact</NavLink>
                  </li>
              </ul>
              </div>
          </nav>
      </header>
    </div>
  )
}

export default Navbar
