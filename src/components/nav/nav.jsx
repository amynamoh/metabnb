import React, { Component } from 'react'
import  './nav.css'
import Logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import Navbtn from './navbtn'
// import Navactive from './navactive'


class Nav extends Component {

 state= {clicked:false};
 handleclick=()=>{
  this.setState({clicked:
  !this.state.clicked})
 }
 
 render(){

  return (
    <section className='nav' >
      
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
        <div className='navBar'>
            <i onClick={this.handleclick} className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
            <div className={this.state.clicked ? "navLink active": "navLink"}>
              <Link to="/"><h4>Home</h4></Link>
              <Link to="/place"><h4>Place to stay</h4></Link>
              <Link href=""><h4>NFTs</h4></Link>
              <Link href=""><h4>Community</h4></Link>
              {/* <Navactive/> */}
              <Navbtn/>
            </div>
        </div>
    </section>
  )
}
}

export default Nav