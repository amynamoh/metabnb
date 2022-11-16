import React from 'react'
import './hero.css'
// import IMG1 from '../../assets/image1.png'
// import IMG2 from '../../assets/image2.png'
// import IMG3 from '../../assets/image3.png'
// import IMG4 from '../../assets/image4.png'
import HERO from '../../assets/hero.png'

const hero = () => {
  return (
    <section>
        <div className="hero">
            <div className="heroLeft">
                <h1>
                    <span>Rent a </span>
                    <span className='heroSpan'>Place </span>
                    <span>away from </span>
                    <span className='heroSpan'>Home </span>
                    <span>in the </span>
                    <span className='heroSpan'>Metaverse</span>
                </h1>
                <h3>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</h3>
                <div className="heroSearch">
                    <input type="text" name="" placeholder='Search for location'/>
                    <a href="" className='btn btnP2'>Search</a>
                </div>
            </div>
            <div className="heroRight">
                <img src={HERO} alt="" id='hero'/>
            </div>
        </div>
    </section>
  )
}

export default hero