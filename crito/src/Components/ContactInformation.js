import React from 'react'
import InfoBox from '../Generic/InfoBox'


const ContactInformation = () => {
  return (
    <section className="info-boxes">
      <div className="container">
        <InfoBox title="Visit us" icon="" description1="Sveavägen 31" description2="111 34 STOCKHOLM" />
        <InfoBox title="Call us"  description1="+46 (8) 121 4705 0" description2="+46 (8) 121 4705 0" />
        <InfoBox title="Email us"  description1="info@crito.com" description2="support@crito.com" />
 
      </div>
    </section>
  )
}
<i class="fa-solid fa-location-dot"></i>
export default ContactInformation