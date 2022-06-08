import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../Components/auth'
import './NavBar.css'
const Navbar = () => {
    const navLinkStyle = ({isActive}) =>{
       return {
        fontWeight: isActive ? 'bold' : 'normal',
        color: isActive ? "rgb(126, 33, 33)" : 'black'
       }
    }
    const auth = useAuth()
  return (
    <div>
      <header>
          <nav>
              <div className="brand">
                 <img src="../images/Web-Design-PNG-Image.png" alt="hosting" />
                      <a>Company</a>
              <ul>
                  <li>
                      <NavLink style={navLinkStyle} className='navlink' to = "/">Home</NavLink>
                  </li>
                  <li>
                      <NavLink  style={navLinkStyle} className='navlink' to = "/about">About</NavLink>
                  </li>
                  <li>
                      <NavLink style={navLinkStyle} className='navlink' to = "/contact">Contact</NavLink>
                  </li>
                  <li>
                      <NavLink style={navLinkStyle} className='navlink' to = "/account">Account</NavLink>
                  </li>
                  <li>
                  {
                      !auth.user &&  <NavLink style={navLinkStyle} className='navlink' to = "/login">Login</NavLink>
                  }
                  </li>
              </ul>
              </div>
          </nav>
      </header>
    </div>
  )
}

export default Navbar
