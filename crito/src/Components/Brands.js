import React from 'react'
import brand1 from '../Assets/Images/brand-1.svg'
import brand2 from '../Assets/Images/brand-2.svg'
import brand3 from '../Assets/Images/brand-3.svg'
import brand4 from '../Assets/Images/brand-4.svg'

const Brands = () => {
  return (
    <section className="brands">
    <div className="container">
        <div className="paperz"><img src={brand1} alt="#" /></div>
        <div className="dorfus"><img src={brand2} alt="#" /></div>
        <div className="martino"> <img src={brand3} alt="#" /></div>
        <div className="square"><img src={brand3} alt="#" /></div>
        <div className="gobana"><img src={brand4} alt="#" /></div>
    </div>
  </section>
  )
}

export default Brands