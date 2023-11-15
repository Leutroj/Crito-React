import React from 'react'
import Nav from './Nav'
import Showcase from './Showcase'
import Brands from './Brands'
import Services from './Services'
import Features from './Features'
import AboutCompany from './AboutCompany'
import WhyChooseUs from './WhyChooseUs'
import ProjectsAndCase from './ProjectsAndCase'
import TeamMembers from './TeamMembers'
import Testamonials from './Testamonials'
import ArticlesAndNews from './ArticlesAndNews'
import SignUp from './SignUp'

const Header = () => {
  return (
    <header>
    <Nav />
    <Showcase />
    <Brands />
    <Features />
    <AboutCompany />
    <Services />
    <WhyChooseUs />
    <ProjectsAndCase />
    <TeamMembers />
    <Testamonials />
    <ArticlesAndNews />
    <SignUp />
  </header>
  )
}

export default Header