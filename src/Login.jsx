import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
    <div>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" onChange={(e)=>setEmail(e.target.value)} value={email} name="email" required />
        <label htmlFor="phone">Password:</label>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} id="phone" name="phone" required />
        {msgArr.map((msg, index) => (
          <small key={index}>{msg}</small>
        ))}
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Login
