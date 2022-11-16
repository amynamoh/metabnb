import React from 'react'
import './footer.css'
import LOGO from '../../assets/flogo.svg'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twittter from '../../assets/twitter.png'
import copyright from '../../assets/copyright.png'
// import {Link} from 'react-router-dom'


const footer = () => {
  return (
    <footer>
      <div className="footerM">
        <img src={LOGO} alt="" id="logo"/>
        <div className="fSocials">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twittter} alt="" />
        </div>
        <div className="copyright">
          <img src={copyright} alt="" />
          <p>2022 Metabnb</p>
        </div>
      </div>
      <div className="footerD">
        <div className="footerDD">
          <h4>Community</h4>
            <ul>
              {/* <li><Link  to="/" />NFT</li> */}
              <li><a href="">NFT</a></li>
              <li><a href="">Tokens</a></li>
              <li><a href="">Landlords</a></li>
              <li><a href="">Discords</a></li>
            </ul>
        </div>
        <div className="footerDD">
          <h4>Places</h4>
            <ul>
              <li><a href="">Castle</a></li>
              <li><a href="">Farms</a></li>
              <li><a href="">Beach</a></li>
              <li><a href="">Learn more</a></li>
            </ul>
        </div>
        <div className="footerDD">
          <h4>About us</h4>
            <ul>
              <li><a href="">Road map</a></li>
              <li><a href="">Creators</a></li>
              <li><a href="">Career</a></li>
              <li><a href="">Contact us</a></li>
            </ul>
        </div>
      </div>
      
    </footer>
  )
}

export default footer