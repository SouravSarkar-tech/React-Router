import React from 'react'
import './Contacts.css'


const Contact = () => {
    const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <div className='box'>
        <h1>Connect With Us!😇</h1>
         <form className="main_form" onSubmit={handleSubmit}>
         <div className="form_mail">
          <label htmlFor="email">Enter Your Email ID :</label>
          <br/>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            id="email"/>
        </div>

          <div className="first_name">
            <label htmlFor="firstname">Your First Name :</label>
            <br/>
            <input
              type="text"
              name="firstname"
              placeholder="Enter Your First Name"
              id="firstname"
            />
          </div>

          <div className="last_name">
            <label htmlFor="lastname">Your Last Name :</label>
            <br/>
            <input
              type="text"
              name="lastname"
              placeholder="Enter Your Last Name"
              id="lastname"
            />
          </div>
           <input type="submit" className="subbutton" value="Click Here to Submit" />
        </form>
        </div>
  )
}

export default Contact
