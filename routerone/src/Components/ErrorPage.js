import React from 'react'
import './ErrorPage.css'
import { useNavigate } from 'react-router-dom'


const ErrorPage = () => {
     const navigate = useNavigate()
  return (
<div className='article'>
    <h1>Hmmm! That doesn't looks good!</h1>
    <div>
        <p>When you're moving, you're stressed. This page probably doesn't help with that, even though it's pretty cute. But we love to solve problems and fix things, so reach one of us directly and we'll get this move back on track.</p>
        <p>Email: <a href="#">xyz@gmail.com</a> or call at <a href="tel:+91 23456789">+1 23456789</a></p><hr/>
        <p>Go back to <a href="" onClick={() => navigate('/')}>localhost:3000</a></p>
    </div>
</div>
  )
}

export default ErrorPage
