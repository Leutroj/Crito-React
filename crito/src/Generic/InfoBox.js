import React from 'react'

const InfoBox = ({title, URL, description1, description2}) => {
  return (
    <div className="infobox">
       <h3>{title}</h3>
        <a></a>
        <p>{description1}</p>
        <p>{description2}</p>
    </div>
  )
}

export default InfoBox