import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'



const Navactive = () => {
  const [activeNav, setActiveNav]=useState('/')

  return (
    <div className='navBar'>
        <div className="navLink">
            <Link to="/"  onClick={()=>setActiveNav('/')} className={activeNav==='/'?'active':''}><h4>Home</h4></Link>
            <Link to="/place" onClick={()=>setActiveNav('/place')} className={activeNav==='#/place'?'active':''}><h4>Place to stay</h4></Link>
            <Link href=""><h4>NFTs</h4></Link>
            <Link href=""><h4>Community</h4></Link>
        </div>

    </div>
  )
}

export default Navactive