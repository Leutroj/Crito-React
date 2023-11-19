import React from 'react'

const Message = () => {
  return (
    <section className="message-form">
      <div className="container">
        <h1>
          Leave us a message for any information.
        </h1>
        <div className="form-message">
          <div className="mb-3">
          <input type="text" id="firstName"/>
          </div>
          <div className="mb-3">
          <input type="email" id="email"/>
          </div>
          <div className="mb-3">
          <input type="text" id="message"/>
          </div>
          </div>
          <div className="login"><a className="btn-theme" href="login.html">Send Message<i className="fa-regular fa-arrow-up-right"></i></a></div>
     </div>


    </section>
  )
}

export default Message