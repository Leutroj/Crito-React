import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import '../App.css'
import LetsConnect from '../Components/LetsConnect'
import ContactInformation from '../Components/ContactInformation'
import Message from '../Components/Message'
import Mapst from '../Components/Mapst'

const Contact = () => {
  return (
    <main>
      <Nav />
      <LetsConnect />
      <ContactInformation />
      <Message />
      <Mapst />
      <Footer />
    </main>
  )
}

export default Contact