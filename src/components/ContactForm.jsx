import { useState } from 'react';
import Button from './Button';

function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')
  const [feedback, setFeedback] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [emailMessage, setEmailMessage] = useState('')
  const [nameMessage, setNameMessage] = useState('')
  
  const isValidEmail = /\S+@\S+\.\S+/
  

  const handleNameChange = (e) => {
    if(e.target.value === '') {
      setBtnDisabled(true)
      setNameMessage(null)
    } else if(e.target.value.trim().length < 4) {
      setBtnDisabled(true)
      setNameMessage('Name 3 characters or more')
    } else {
      setBtnDisabled(false)
      setNameMessage(null)
    }

    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    if(email === '') {
      setBtnDisabled(true)
      setEmailMessage('Please enter a valid email')
    } else if(!isValidEmail.test(e.target.value)) {
      setBtnDisabled(true)
      setEmailMessage('Please enter a valid email')
    } else {
      setBtnDisabled(false)
      setEmailMessage(null)
    }
    setEmail(e.target.value)
} 

  const handleCommentChange = (e) => {
    setComment(e.target.value)
  }

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='rounded-lg mt-12 mx-auto py-3 container flex bg-gray-500 text-white font-bold justify-center'>
      <form action='' onSubmit={handleSubmit}>
        <h2 className='text-xl font-bold'>Contact Us</h2>
        <div className='container rounded-lg flex flex-col m-2 p-2 shadow-xl bg-indigo-400 text-black ' >
          <input className='input' 
            onChange={handleNameChange}
            value={name}
            type='text' 
            placeholder='Name' />
          {nameMessage && <div className=''>{nameMessage}</div>}
          <input className='input' 
            onChange={handleEmailChange}
            value={email}
            type='text' 
            placeholder='Email' />
            {emailMessage && <div className=''>{emailMessage}</div>}
          <input className='input'
            onChange={handleCommentChange}
            value={comment} 
            type='text'   
            placeholder='Comment (Optional)' />
          <input className='input' 
            onChange={handleFeedbackChange}
            value={feedback}
            type='text' 
            placeholder='Feedback (Optional)' />
          
          <Button type='submit' isDisabled={btnDisabled} />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
