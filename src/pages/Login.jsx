import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
      // state
  const [email,setEmail] =useState('')
  const [password,setPassword] = useState('')
  const [msgArr, setMsgArr] = useState([])
  const navigate = useNavigate()

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = [];

      // Password validation
      if (password.length < 8) {
        msg.push('Password must be at least 8 characters long.');
      }
      if (!/[A-Z]/.test(password)) {
        msg.push('Password must contain at least one uppercase letter.');
      }
      if (!/[!@#$%^&*]/.test(password)) {
        msg.push('Password must contain at least one special character.');
      }
  
      // Email validation
      if (!/\S+@\S+\.\S+/.test(email)) {
        msg.push('Please enter a valid email address.');
      }
      
      // update msg array
      setMsgArr(msg);

      // clear each msg after 3 seconds 
      setTimeout(() =>{
        setMsgArr([])
           },5000) 

    // log the email and password
    console.log(email, password)
    navigate('/user')
  }

  return (
<div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">Email:</label>
        <input 
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input 
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="error-messages">
          {msgArr.map((msg, index) => (
            <small key={index}>{msg}</small>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login
