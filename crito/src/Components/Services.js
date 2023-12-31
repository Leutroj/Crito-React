import React from 'react'
import ServiceBox from '../Generic/ServiceBox'
import SectionTitles from '../Generic/SectionTitles'

const Services = () => {
  return (
    <section className="our-services">
  <div className="container">

    <SectionTitles title="Our Services" description="We Provide The Best Consulting Services" />
    <div className="consulting-columns">
     <ServiceBox title="Buisness Advice"  description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/businessadvice" />
     <ServiceBox title="Startup Business"  description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/startupbusiness" />
     <ServiceBox title="Financial Advice"  description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/finacialadvice" />
     <ServiceBox title="Risk Management"  description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/riskmanagement" />
    </div>
    <div className="os-btn">
      <a className="btn-transparent" href="services.html">Browse Services<i className="fa-regular fa-arrow-up-right"></i></a>
     </div>
     <div className="fill"></div>
  </div>

</section>
  )
}

export default Services