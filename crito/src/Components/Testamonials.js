import React from 'react'
import star from "../Assets/Images/Star.svg"
import cassandra from "../Assets/Images/Cassandra.svg"
import amanda from "../Assets/Images/Amanda.svg"
import jack from "../Assets/Images/Jack.svg"

const Testamonials = () => {
  return (
    <section className="testimonial">
    <div className="container">
      <div className="section-title">
        <p>Testimonial</p>
        <h2>What our Client Says</h2>
      </div>
      <div className="reviews">
        <div className="cassandra-review">
          <img src={star} alt="#" />
          <p>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
          </p>
          <img className="profile-pic" src={cassandra} alt="#" />
          <h3>Cassandra Warren</h3>
          <p1>Business Manager, Dorfus</p1>
        </div>

        <div className="amanda-review">
          <img src={star} alt="#" />
          <p>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
          </p>
          <img className="profile-pic"src={amanda} alt="#" />
          <h3>Amanda Tulling</h3>
          <p1>Senior Developer, Square</p1>
        </div>

        <div className="jack-review">
          <img src={star} alt="#" />
          <p>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
          </p>
          <img className="profile-pic" src={jack} alt="#" />
          <h3>Jack McDogglas</h3>
          <p1>Key Account Manager, Gobona</p1>
        </div>
        

      </div>
      <div className="review-btn">
        <a className="btn-black" href="services.html">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
      </div>
    </div>
  </section>
  )
}

export default Testamonials