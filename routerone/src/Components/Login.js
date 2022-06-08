import React,{useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'
import './Login.css'

const Login = () => {
    const[user,setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const redirectPath = location.state?.path || '/'

    const handleLogin =()=>{
        auth.login(user)
        navigate(redirectPath, {replace: true})
    }
  return (
    <div className='maindiv'>
      <label>
          Your Username: <input type="text" placeholder='Enter Your Username' onChange={e => setUser(e.target.value)}/>
      </label>
      <br/><br/>
       <label>
          Your Password: <input type="password" placeholder='Enter Your Password' />
      </label>
      <br/><br/>
      <button className='subabutton' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
