import React from 'react'

const Features = () => {
  return (
    <section className="features">
    <div className="container">
      <div className="section-title">
        <div className="text-columns">
        <p>Features</p>
        <h2>Our Accounting is
          trusted by thousand
          of companies</h2>
          <div className="learn-more"><a className="btn-yellow" href="learn.html">Learn More<i className="fa-regular fa-arrow-up-right"></i></a></div>
        </div>
      </div>
      <div className="business-advice">
        <i className="fa-light fa-handshake"></i>
        <h3>Business Advice</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
  
      </div>
      <div className="startup-business">
        <i className="fa-light fa-lightbulb-on"></i>
        <h3>Startup Business</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
  
      </div>
      <div className="financial-advice">
        <i className="fa-solid fa-chart-mixed-up-circle-dollar"></i>
        <h3>Financial Advice</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
  
      </div>
      <div className="risk-management">
        <i className="fa-sharp fa-regular fa-box-circle-check"></i>
        <h3>Risk Management</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
  
      </div>
      
    </div>
  </section>
  )
}

export default Features