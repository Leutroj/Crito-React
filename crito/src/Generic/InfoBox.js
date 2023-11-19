import React from 'react'

const InfoBox = ({title, img, description1, description2}) => {
  return (
    <div className="infobox">
       <img src={img} />
       <h3>{title}</h3>
        <p>{description1}</p>
        <p>{description2}</p>
    </div>
  )
}

export default InfoBox