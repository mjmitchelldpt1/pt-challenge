import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaEye, FaEyeSlash, FaLock, FaEnvelope, FaCheck, FaUser } from 'react-icons/fa'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { db } from '../firebase.config'

function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const { username, email, password} = formData
  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const handlePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const auth = getAuth()

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const user = userCredential.user

      updateProfile(auth.currentUser, {
        displayName: username,
      })
      
      navigate('/')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <main className='container rounded-lg flex flex-col m-2 p-2 shadow-xl bg-indigo-400 text-black justify-center items-center'>
        <h2>Welcome</h2>
      <form onSubmit={onSubmit}>
        <div className='container flex flex-row justify-center items-center'>
          <FaUser />
          <input className='input mx-2'
          onChange={onChange}
          type="username"
          value={username}
          placeholder='Username'
          id='username' />
          <FaCheck />
        </div>
        <div className='container flex flex-row justify-center items-center'>
          <FaEnvelope />
          <input className='input mx-2'
          onChange={onChange}
          type="Email"
          value={email}
          placeholder='Email'
          id='email' />
          <FaCheck />
        </div>
        <div className='container flex flex-row justify-center items-center'>
          <FaLock />
          <input className='input mx-2'
          onChange={onChange}
          type={showPassword ? 'text' : 'password' }
          value={password}
          placeholder='Password'
          id='password' />
          {showPassword ? <FaEyeSlash className='hover:cursor-pointer' onClick={handlePasswordVisibility}/> : <FaEye className='hover:cursor-pointer' onClick={handlePasswordVisibility}/>}  
        </div>
        <Link to='/forgotpassword'>Forgot Password?</Link>
        <div className='container flex justify-center'>
          <button 
            className='button-primary'>
              Register
          </button>
        </div>
      </form>
      {/* Google Oauth */}
      <Link to='/login'>Already a member?</Link>
      </main>
    </>
  )
}

export default Register
