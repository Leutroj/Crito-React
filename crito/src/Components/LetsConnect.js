import React from 'react'
import { NavLink } from 'react-router-dom'

const LetsConnect = () => {
  return (
    <section className="letsconnect">
      <div className="container">
      <NavLink className="textlink" to="/">Home</NavLink>
      <NavLink className="textlink" to="/contact">Contact</NavLink>
      <h1>Let's Connect</h1>
      </div>

    </section>
  )
}

export default LetsConnect