import React from 'react'
import logowhite from "../Assets/Images/Logo-white.svg"

const Footer = () => {
  return (
    <footer className="end">
    <div className="container">
      <div className="links">
        <div className="crito-box">
          <img src={logowhite} alt="#" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.
          </p>
        </div>
        <div className="company-box">
          <h3>
            Company
          </h3>
          <a href="about.html">About</a>
          <a href="features.html">Features</a>
          <a href="work.html">Works</a>
          <a href="career.html">Career</a>
        </div>
        <div className="help-box">
          <h3>
            Help
          </h3>
          <a href="support.html">Customer Support</a>
          <a href="delivery.html">Delivery Details</a>
          <a href="terms-conditions.html">Terms & Conditions</a>
          <a href="privacypolicy.html">Privacy Policy</a>
        </div>
        <div className="resources-box">
          <h3>
            Resources
          </h3>
          <a href="ebooks.html">Free eBooks</a>
          <a href="development.html">Development Tutorial</a>
          <a href="blog.html">How to - Blog</a>
          <a href="youtubeplaylist.html">Youtube Playlist</a>
        </div>
        <div className="link-box">
          <h3>
            Link
          </h3>
          <a href="ebooks.html">Free eBooks</a>
          <a href="development.html">Development Tutorial</a>
          <a href="blog.html">How to - Blog</a>
          <a href="youtubeplaylist.html">Youtube Playlist</a>
        </div>
      </div>
      <div className="l-box">
      <div className="copyright">
        <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
      </div>
      <div className="social-links">
        <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
        <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
        <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
      </div>
    </div>
    </div>
   </footer>
  )
}

export default Footer