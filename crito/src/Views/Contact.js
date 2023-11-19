import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import '../App.css'
import LetsConnect from '../Components/LetsConnect'
import ContactInformation from '../Components/ContactInformation'
import Message from '../Components/Message'

const Contact = () => {
  return (
    <contact>
      <Nav />
      <LetsConnect />
      <ContactInformation />
      <Message />
      <Map />


      <Footer />
    </contact>
  )
}

export default Contact