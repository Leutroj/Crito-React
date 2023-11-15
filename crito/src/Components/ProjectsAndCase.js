import React from 'react'
import articlepic1 from "../Assets/Images/article-image-1.png"
import articlepic2 from "../Assets/Images/article-image-2.png"
import articlepic3 from "../Assets/Images/article-image-3.png"
import articlepic4 from "../Assets/Images/article-image-4.png"

const ProjectsAndCase = () => {
  return (
    <section className="project-and-case">
    <div className="container">
      <div className="section-title">
        <p>Project & Case Studies</p>
        <h2>Let’s Looks Our Global Projects</h2>
      </div>
      <div className="project-and-cases">
        <a className="projects" href="#">
          <img src={articlepic1} alt="a man reading a business paper" />
          <h3>Grow your business</h3>
          <div className="read-more">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
        </a>
        <a className="projects" href="#">
          <img src={articlepic2} alt="pink Apple products" />
          <h3>Why your client needs a responsive website</h3>
          <div className="read-more">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
        </a>
        <a className="projects" href="#">
          <img src={articlepic3} alt="desk with office supplies" />
          <h3>Educate your employees to get better results</h3>
          <div className="read-more">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
        </a>
        <a className="projects" href="#">
          <img src={articlepic4} alt="latop with diagrams" />
          <h3>Business Insights is a important piece of your business</h3>
          <div className="read-more">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
        </a>
      </div>
      <div className="center-content">
        <a className="btn-black" href="projects.html">All Recent Projects<i className="fa-regular fa-arrow-up-right"></i></a>
      </div>
    </div>
  </section>
  )
}

export default ProjectsAndCase