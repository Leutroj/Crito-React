import React, { useState } from 'react';

const Message = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageBtnText, setMessageBtnText] = useState('Send message');
  const [isValid, setIsValid] = useState(true);

  const validateLength = (value, minLength = 2) => {
    return value.length >= minLength;
  };

  const validateEmail = (value) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(value);
  };

  const validateFormField = (element) => {
    const errorMessages = {
      name_required: 'Name is required',
      name_invalid: 'Please enter a valid name',
      email_required: 'Email is required',
      email_invalid: 'Please enter a valid email',
      message_required: 'Message is required',
    };

    if (!validateLength(element.value, 1)) {
      setIsValid(false);
      element.classList.add('error');
      document.getElementById(`${element.name}-error`).innerHTML = errorMessages[`${element.name}_required`];
    } else {
      let result = false;

      switch (element.type) {
        case 'text':
          result = validateLength(element.value);
          break;
        case 'email':
          result = validateEmail(element.value);
          break;
        case 'textarea':
          result = validateLength(element.value);
          break;
        default:
          break;
      }

      if (!result) {
        setIsValid(false);
        element.classList.add('error');
        document.getElementById(`${element.name}-error`).innerHTML = errorMessages[`${element.name}_invalid`];
      } else {
        setIsValid(true);
        element.classList.remove('error');
        document.getElementById(`${element.name}-error`).innerHTML = '';
      }
    }
  };

  const validate = (element) => {
    validateFormField(element);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (let element of e.target.elements) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        validateFormField(element);
      }
    }

    if (!isValid) {
      setMessageBtnText('Please fix the errors');
      return;
    }

    const user = { name, email, message };
    const json = JSON.stringify(user);

    const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: json,
    });

    var property = document.getElementById('btnStandard');
    switch (result.status) {
      case 200:
        setMessageBtnText('Sent');
        property.style.backgroundColor = '#35b303';
        console.log('User created successfully');
        break;
      default:
        setMessageBtnText('Something went wrong, try again');
        property.style.backgroundColor = '#da3406';
        break;
    }
  };

  return (
    <section className="message-form">
      <div className="container">
        <h1>Leave us a message</h1>
        <h1>for any information.</h1>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-message">
            <div className="mb-3">
              <input type="text" name="name" placeholder="Name*" value={name} onChange={(e) => setName(e.target.value)} onKeyUp={(e) => validate(e.target)} required/><span id="name-error"></span>
            </div>
            <div className="mb-3">
              <input type="email" name="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} onKeyUp={(e) => validate(e.target)}required/><span id="email-error"></span>
            </div>
            <div className="mb-3">
              <textarea name="message" placeholder="Your Message*" value={message} onChange={(e) => setMessage(e.target.value)}onKeyUp={(e) => validate(e.target)}required></textarea><span id="message-error"></span>
            </div>
          </div>
          <button type="submit" id="btnStandard" className="btn-theme"> {messageBtnText} <i className="fa-regular fa-arrow-up-right"></i></button>
        </form>
      </div>
    </section>
  );
};

export default Message;