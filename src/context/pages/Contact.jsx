import { useState } from 'react';
import { useNavigate} from 'react-router-dom'
import Button from '../../components/Button';



function ContactForm() {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    comment: '', 
    feedback: ''
  })

  const { name, email, comment, feedback } = contactData
  const [btnDisabled, setBtnDisabled] = useState(false)
  const [emailMessage, setEmailMessage] = useState('')
  const [nameMessage, setNameMessage] = useState('')
  
  const isValidEmail = /\S+@\S+\.\S+/;
  const navigate = useNavigate()

  const onChange = (e) => {
    setContactData({
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(contactData)
    navigate('/')
    
  }
  return (
    <div className='rounded-lg mt-12 mx-auto py-3 container flex bg-gray-500 text-white font-bold justify-center'>
      <form action='' onSubmit={handleSubmit}>
        <h2 className='text-xl font-bold'>Contact Us</h2>
        <div className='container rounded-lg flex flex-col m-2 p-2 shadow-xl bg-indigo-400 text-black ' >
          <input className='input' 
            onChange={onChange}
            value={name}
            type='text' 
            id='name'
            placeholder='Name' />
          {nameMessage && <div className=''>{nameMessage}</div>}
          <input className='input' 
            onChange={onChange}
            value={email}
            type='email' 
            id='email'
            placeholder='Email' />
            {emailMessage && <div className=''>{emailMessage}</div>}
          <input className='input'
            onChange={onChange}
            value={comment} 
            type='text' 
            id='comment'  
            placeholder='Comment (Optional)' />
          <input className='input' 
          onChange={onChange}
            value={feedback}
            type='text' 
            id='feedback'
            placeholder='Feedback (Optional)' />
          <Button type='submit' text='Submit' isDisabled={btnDisabled} />
        </div>
        
      </form>
    </div>
  );
}

export default ContactForm;
