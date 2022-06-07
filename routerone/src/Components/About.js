import React from 'react'
import './About.css'


const About = () => {
  return (
    <div className='cards'>
        <div className="pricing-cards">
              <div className="pricing-card">
                  <p className="plan">Beginner</p>
                  <p className="description">
                    Lorem ipsum dolor sit amet consec tetur.Lorem ipsum dolor sit amet consec tetur.Lorem ipsum dolor sit amet consec tetur.
                  </p>

                  <a href="#">Free Trail</a>

                  <div className="price">
                      All time Free <span>Always</span>
                  </div>

                  <ul>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet conse.</li>
                    <li>Lorem ipsum dolor sit amet consec tetur.</li>
                    <li>Lorem ipsum dolor sit amet cons ecte tur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                  </ul>
              </div>

              <div className="pricing-card">
                <p className="plan">Super Pro</p>
                <p className="description">
                  Lorem ipsum dolor sit amet consec tetur.Lorem ipsum dolor sit amet consec tetur.Lorem ipsum dolor sit amet consec tetur.
                </p>
      
                <a href="#"> Rock On</a>
      
                <div className="price">Rs.4200 <span>per month</span></div>
      
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet conse.</li>
                  <li>Lorem ipsum dolor sit amet consec tetur.</li>
                  <li>Lorem ipsum dolor sit amet cons ecte tur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
              </div>
      
              <div className="pricing-card">
                <p className="plan">Enterprise</p>
                <p className="description">
                  Lorem ipsum dolor sit amet consec tetur.Lorem ipsum dolor sit amet consec tetur.Lorem ipsum dolor sit amet consec tetur.
                </p>
      
                <a href="#"> Start rocking</a>
      
                <div className="price">Rs.9900 <span>per month</span></div>
      
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet conse.</li>
                  <li>Lorem ipsum dolor sit amet consec tetur.</li>
                  <li>Lorem ipsum dolor sit amet cons ecte tur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
              </div>
          </div>
    </div>
  )
}

export default About
