

import React from 'react'
import'./ContactPage.css';
// import contactImg from './contactImg.jpg';
const ContactPage = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className='page-layout'>
 <div className="container mt-5">
      <h2 className="mb-3">React Contact Form Component Example</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
           <div>
        
          
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        </div> 
        <button className="btn btn-danger" type="submit">
          {formStatus}
         
        </button>
        <p>Phone: <strong>123-456-7890</strong></p>
      <p>Email: <strong>HomeGarden@gmail.com</strong></p>
      </form>
      </div> 
    </div>
   
   
   
  )
}
export default ContactPage