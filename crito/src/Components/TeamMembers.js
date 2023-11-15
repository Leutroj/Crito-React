import React from 'react'
import kristine from "../Assets/Images/Kristine.png"
import mark from "../Assets/Images/Mark.png"
import kimberly from "../Assets/Images/Kimberly.png"
import justin from "../Assets/Images/Justin.png"

const TeamMembers = () => {
  return (
    <section className="members">
    <div className="container">
      <div className="etm">
      <div className="section-title">
        <p>Meet Our Team</p>
        <h2>Experience Team Members</h2>
      </div>
      <a className="btn-transparent" href="team.html">Browse Team<i className="fa-regular fa-arrow-up-right"></i></a>
    </div>
      <div className ="team-members">
        <div className="kristine">
          <img src={kristine} alt="#" />
          <h3>Kristine Palmer</h3>
          <p>Chef Operation Officer</p>
        </div>
        <div className="aburi">
          <img src={mark} alt="#" />
          <h3>Mark Aburi</h3>
          <p>Senior Consultant</p>
        </div>
        <div className="kimberly">
          <img src={kimberly} alt="#" />
          <h3>Kimberly Hansen</h3>
          <p>Senior Consultant</p>
        </div>
        <div className="Justin">
          <img src={justin} alt="#" />
          <h3>Justin Willoman</h3>
          <p>Senior Tech Consultant</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default TeamMembers