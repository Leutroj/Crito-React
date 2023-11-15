import React from 'react'
import womanimage from "../Assets/Images/Image-1.svg"

const AboutCompany = () => {
  return (
    <section className="about-company">
    <div className="container">
      <div className="woman-image">
      <img src={womanimage} alt="#" />
      <div className="blue-box">
        <div className="founder">
        <h3>Samantha Brown,</h3>
        <h4>Founder</h4>
        </div>
       <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
      </div>
    </div>
    <div className="ac">
      <div className="section-title">
        <p>About Company</p>
        <h2>We Are Business Consulting & Credit Repair Experts</h2>
        <p2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p2>
        
      </div>
      <a className="btn-black" href="services.html">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
      <a className="btn-video" href="services.html"><i className="fa-thin fa-circle-play"></i>Intro video</a>
    </div>
    </div>
  
  </section>
  )
}

export default AboutCompany