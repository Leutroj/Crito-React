import React from 'react'
import womenlaughing from "../Assets/Images/women-laughing.png"
import computerscreen from "../Assets/Images/computer-screen.png"
import books from "../Assets/Images/books.png"

const ArticlesAndNews = () => {
  return (
    <section className="article-news">
    <div className="container">
      <div className="anb">
      <div className="section-title">
        <p>Article & News</p>
        <h2>Get Every Single Articles & News</h2>
      </div>
      <div className="browse-btn">
        <a className="btn-transparent" href="team.html">Browse Articles<i className="fa-regular fa-arrow-up-right"></i></a>
      </div>
    </div>
    <div className="articles">
      <a href="articles.html" className="laugh">
        <img src={womenlaughing} alt="#" />
        <div className="calender">
          <h3>25</h3>
          <h4>Mar</h4>
        </div>
        <p>Business</p>
        <h3>How To Use Digitalization 
          In The Classroom</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
        </a>
      <a href="articles.html" className="screen">
        <img src={computerscreen} alt="#" />
        <div className="calender">
          <h3>17</h3>
          <h4>Mar</h4>
        </div>
        <p>Business</p>
        <h3>How To Implement Chat GPT
          In Your Projects</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
        </a>
      <a href="articles.html" className="books">
        <img src={books} alt="#" />
        <div className="calender">
          <h3>13</h3>
          <h4>Mar</h4>
        </div>
        <p>Business</p>
        <h3>The Guide To Support 
          Modern CSS Design</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
        </a>
    </div>
    </div>
  </section>
  )
}

export default ArticlesAndNews