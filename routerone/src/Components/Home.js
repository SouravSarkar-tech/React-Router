import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (   
    <div className = "super"> 
       <div className="main-content">
        <h1>Wake Up To Reality!</h1>
        <p className='right'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut atque
            repellendus tempore magnam nihil quibusdam beatae quod ipsum
            molestias? Doloribus esse culpa, sit nisi recusandae facere deleniti
        </p>

        <a href="#" onClick={() => navigate('about')} className="gradient-btn">Avail Free Trail</a>
      </div>

    <div className="about">
      <h1>A Bit More Deep</h1>
      <div className="about-sub">
        <img src="../images/Web-Design-PNG-Transparent-Picture.png" alt="upload" />
        <div className="sub-sub-about">
          <h2>Why Do You Choose Us</h2>
          <p className='left'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut atque
            repellendus tempore magnam nihil quibusdam beatae quod ipsum
            molestias? Doloribus esse culpa, sit nisi recusandae facere deleniti
            ducimus asperiores! Inventore? Ut aut deleniti distinctio labore
            nisi possimus voluptatem dolores modi doloribus expedita at qui esse
            necessitatibus provident sapiente praesentium.
          </p>
        </div>
      </div>
      <div className="about-sub">
        <div className="sub-sub-about">
          <h2>Very Much Interactive UI</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut atque
            repellendus tempore magnam nihil quibusdam beatae quod ipsum
            molestias? Doloribus esse culpa, sit nisi recusandae facere deleniti
            ducimus asperiores! Inventore? Ut aut deleniti distinctio labore
            nisi possimus voluptatem dolores modi doloribus expedita at qui esse
            necessitatibus provident sapiente praesentium.
          </p>
        </div>
        <img src="../images/Web-Design-Transparent-Images-PNG.png" alt="upload" />
      </div>
      </div>

       <div className="subscribe">
        <h2>Stay Updated! Subscribe and Join Us Now!</h2>
        <form  className="subscribe-box">
            <input required type="email" name="subscription_email" placeholder="Enter your email address" />
            <button onClick={() => navigate('about')}>Click Here To Subscribe</button>
        </form>
    </div>


    </div>


  )
}

export default Home
