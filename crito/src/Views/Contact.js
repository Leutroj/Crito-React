import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import '../App.css'
import LetsConnect from '../Components/LetsConnect'
import ContactInformation from '../Components/ContactInformation'
import Map from '../Components/Map'

const Contact = () => {
  return (
    <contact>
      <Nav />
      <LetsConnect />
      <ContactInformation />
      <Map />


      <Footer />
    </contact>
  )
}

export default Contact