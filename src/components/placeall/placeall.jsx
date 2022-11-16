import React from 'react'
import './placeall.css'
import {Link} from 'react-router-dom'
import Filter from '../../assets/filter.svg'


const placeall = () => {
  return (
    <section className='placeall'>
      <div className="placeD">
        <Link href=""><h4>Resturant</h4></Link>
        <Link href=""><h4>Cottage</h4></Link>
        <Link href=""><h4>Castle</h4></Link>
        <Link href=""><h4>fantast city</h4></Link>
        <Link href=""><h4>beach</h4></Link>
        <Link href=""><h4>Carbins</h4></Link>
        <Link href=""><h4>Off-grid</h4></Link>
        <Link href=""><h4>Farm</h4></Link>

      </div>
        
        <div className="placefilter">
            <input type="text"  placeholder="Location"  name="" id="" />
            <img src={Filter} alt="" />
        </div>
    </section>
  )
}

export default placeall