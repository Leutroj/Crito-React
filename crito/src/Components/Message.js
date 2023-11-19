import React, { useState } from 'react'

const Message = () => {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [messageBtnText, setMessageBtnText] = useState("Send message");


  const handleSubmit = async (e) => {
    e.preventDefault()

    const user = {name, email, message}
    const json = JSON.stringify(user)

    const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', { 
      method: 'post', 
      headers: { 
        'content-type': 'application/json'
    },
        body: json
     })
     var property = document.getElementById("btnStandard");
      switch(result.status){
        
        case 200:
          setMessageBtnText("Sent");
          property.style.backgroundColor = "#35b303"
            console.log('användaren skapades korrekt')
            break
        default: 
            console.log(`något gick fel. felmeddelandet är ${await result.text()}`)
            setMessageBtnText("Något blev fel");
            property.style.backgroundColor = "#da3406"
            break
      }
  }
  
  return (
    <section className="message-form">
      <div className="container">
        <h1>
          Leave us a message
        </h1>
        <h1>
           for any information.
        </h1>
       <form onSubmit={handleSubmit} noValidate>
       <div className="form-message">
          <div className="mb-3">
          <input type="text" placeholder="Name*" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="mb-3">
          <input type="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="mb-3">
          <input type="message" placeholder="Your Message*" value={message} onChange={(e) => setMessage(e.target.value)}/>
          </div>
          </div>
          <button type="submit" id="btnStandard" className="btn-theme">{messageBtnText}<i className="fa-regular fa-arrow-up-right"></i></button>

       </form>
          
     </div>


    </section>
  )
}

export default Message