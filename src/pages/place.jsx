import React from 'react'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import Placeall from '../components/placeall/placeall'
import Placecard from '../components/placecard/placecard'

const place = () => {
  return (
        <>
        <Nav/>
        <Placeall/>
        <Placecard/>
        <Footer/>
        </>
    )
}

export default place