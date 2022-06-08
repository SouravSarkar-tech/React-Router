import React from 'react'
import './Account.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

const Account = () => {
    const auth = useAuth()
    const navigate = useNavigate()


    const handleLogout =()=>{
        auth.logout()
        navigate('/')
    } 
   
return (
<div className='topone'>
 <div className="container">
  <div className="header-container">
    <img src="https://s17.postimg.cc/ypm5ye95r/image.jpg" alt="" className="header-image" />
    <div className="header">
      <h1 className="main-heading">Hey Hello {auth.user}!😃</h1>
      <span className="tag">User</span>
      <span className="tag">Test Our Service</span>
      <div className="stats">
        <span className="stat-module">
          Massages <span className="stat-number">01</span>
        </span>
        <span className="stat-module">
          Notification <span className="stat-number">44</span>
        </span>
        <span className="stat-module">
          More.. <span className="stat-number">24</span>
        </span>
      </div>
    </div> 
  </div>
  
<div className="overlay-header"></div>
  <div className="body">
    <div className="body-action-button u-flex-center">
      <svg fill="#ffffff" height="28" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    </div>
    <span className="body-stats">Massages <span>02</span></span>
    <span className="body-stats">Points <span>200</span></span>
    <div className="u-clearfix"></div>
    <div className="body-info">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut atque
            repellendus tempore magnam nihil quibusdam beatae quod ipsum
            molestias? Doloribus esse culpa, sit nisi recusandae facere deleniti
            ducimus asperiores! Inventore?
      </p>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut atque
            repellendus tempore magnam nihil quibusdam beatae quod ipsum
            molestias? Doloribus esse culpa, sit nisi recusandae facere deleniti
            ducimus asperiores! Inventore?
      </p>
    </div>
    <div className="body-more">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className="card u-clearfix">
      <span className="card-heading">Our Services</span>
      <span className="card-more">
        <svg fill="#777777" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      </span>
      <ul className="card-list">
        <li> <img src="../images/Web-Design-PNG-Transparent-Picture.png" alt="upload" /></li>
      </ul>
    </div>
  </div> 
</div>
      <button className='subbbutton' onClick={handleLogout}>Logout By Clicking Here!</button>
    </div>
  )
}

export default Account
