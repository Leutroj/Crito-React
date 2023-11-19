import React from 'react'
import InfoBox from '../Generic/InfoBox'
import locationicon from '../Assets/Images/location.svg'
import callicon from '../Assets/Images/call.svg'
import mailicon from '../Assets/Images/mail.svg'


const ContactInformation = () => {
  return (
    <section className="info-boxes">
      <div className="container">
        <InfoBox title="Visit us" img={locationicon} description1="Sveavägen 31" description2="111 34 STOCKHOLM" />
        <InfoBox title="Call us"  img={callicon} description1="+46 (8) 121 4705 0" description2="+46 (8) 121 4705 0" />
        <InfoBox title="Email us" img={mailicon}  description1="info@crito.com" description2="support@crito.com" />
 
      </div>
    </section>
  )
}
<i class="fa-solid fa-location-dot"></i>
export default ContactInformation