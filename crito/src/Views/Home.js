import React from 'react'
import { NavLink, Link } from 'react-router-dom' 
import '../App.css'
import Nav from '../Components/Nav'
import Showcase from '../Components/Showcase'
import Brands from '../Components/Brands'
import Features from '../Components/Features'
import AboutCompany from '../Components/AboutCompany'
import Services from '../Components/Services'
import WhyChooseUs from '../Components/WhyChooseUs'
import ProjectsAndCase from '../Components/ProjectsAndCase'
import TeamMembers from '../Components/TeamMembers'
import Testamonials from '../Components/Testamonials'
import ArticlesAndNews from '../Components/ArticlesAndNews'
import SignUp from '../Components/SignUp'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <main>

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
    <Footer />
    </main>
  )
}

export default Home