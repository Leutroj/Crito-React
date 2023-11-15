import React from 'react'
import womentalking from "../Assets/Images/women-talking.svg"

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
  <div className="container">
    <div className="text-1">
    <div className="section-title">
      <p>Why Choose Us</p>
      <h2>Why We Are The Best Business Consulting Agency</h2>
    </div>
    <div className="pe">
      <div className="icons">
      <i className="fa-regular fa-thumbs-up"></i>
    </div>
      <h3>Process Excellence</h3>
      <p>Lorem, ipsum dolor sit amet consectetur.</p>
    </div>
    <div className="sp">
      <div className="icons">
      <i className="fa-solid fa-bullseye"></i>
      </div>
      <h3>Strategic Planning</h3>
      <p>Lorem, ipsum dolor sit amet consectetur.</p>
    </div>
    <div className="ed">
      <div className="icons">
      <i className="fa-solid fa-pen-nib"></i>
      </div>
      <h3>Experience Design</h3>
      <p>Lorem, ipsum dolor sit amet consectetur.</p>
    </div>
    <div className="ai">
      <div className="icons">
      <i className="fa-thin fa-head-side-brain"></i>
      </div>
      <h3>Artificial Inteligence</h3>
      <p>Lorem, ipsum dolor sit amet consectetur.</p>
    </div>
  </div>
  <div className="pic-1">
    <img src={womentalking} alt="#" />
  </div>
  </div>
</section>
  )
}

export default WhyChooseUs