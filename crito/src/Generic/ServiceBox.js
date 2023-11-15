import React from 'react'

const ServiceBox = ({title, description, url}) => {
  return (
    <div className="servicebox">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={url}><i className="fa-solid fa-circle-arrow-right"></i></a>
  
      </div>
  )
}

export default ServiceBox