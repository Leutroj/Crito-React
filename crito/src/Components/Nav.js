import React from 'react'
import logoblack from '../Assets/Images/Logo-black.svg'

const Nav = () => {
  return (
    <section className='nav'>
      <div className="container">
      <button className="btn-menubars"><i className="fa-solid fa-bars-staggered"></i></button>
      <div className="logotype">
        <a href="index.html"><img src={logoblack} alt="crito logotype" /></a> 
      </div>

      <div className="contactinformation">
        <div className="content-box">
          <i className="fa-regular fa-phone-volume"></i>
          +46 (8) 121 470 50
        </div>
        <div className="content-box">
          <i className="fa-regular fa-envelope"></i>
          info@crito.com
        </div>
        <div className="content-box last">
          <i className="fa-light fa-location-dot"></i>
          Sveavägen31, 111 34 STOCKHOLM
        </div>
      </div>

      <div className="socialmedia">
        <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
        <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
        <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
      </div>
      <div className="menu">
        <nav> 
          <a className="active" href="home.html">Home</a>
          <a href="service.html">Service</a>
          <a href="news.html">News</a>
          <a href="contacts.html">Contact</a>
        </nav>
        <div className="login"><a className="btn-theme" href="login.html">Login<i className="fa-regular fa-arrow-up-right"></i></a></div>
      </div>
    </div>
    </section>
  )
}

export default Nav