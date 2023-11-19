import React, { useState } from 'react'

const Message = () => {
  
  const [firstName, setFirstName] = useState('Alexander')
  const [email, setEmail] = useState('Alexander@domain.se')
  const [message, setMessage] = useState('Alexander slösar tid')
  
  return (
    <section className="message-form">
      <div className="container">
        <h1>
          Leave us a message
        </h1>
        <h1>
           for any information.
        </h1>
       <form noValidate>
       <div className="form-message">
          <div className="mb-3">
          <input type="text" id="firstName" placeholder="Name*" defaultValue={firstName} onChange={(e) => setFirstName(e.target.defaultValue)}/>
          </div>
          <div className="mb-3">
          <input type="email" id="email" placeholder="Email*" defaultValue={email} onChange={(e) => setEmail(e.target.defaultValue)}/>
          </div>
          <div className="mb-3">
          <input type="message" id="message" placeholder="Your Message*" defaultValue={message} onChange={(e) => setMessage(e.target.defaultValue)}/>
          </div>
          </div>
       </form>
          
          <button type="submit" className="btn-theme">Send Message<i className="fa-regular fa-arrow-up-right"></i></button>
     </div>


    </section>
  )
}

export default Message