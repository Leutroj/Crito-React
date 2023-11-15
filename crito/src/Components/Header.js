import React from 'react'
import Nav from './Nav'
import Showcase from './Showcase'
import Brands from './Brands'
import Services from './Services'

const Header = () => {
  return (
    <header>
    <Nav />
    <Showcase />
    <Brands />
    <Services />
  </header>
  )
}

export default Header