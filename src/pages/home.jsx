import React from 'react'
import Nav from '../components/nav/nav'
import Hero from '../components/hero/hero'
import HeroFooter from '../components/heroFooter/heroFooter'

import Inspo from '../components/inspo/inspo'

import NFTS from '../components/nfts/nfts'

import Footer from '../components/footer/footer'



const home = () => {
  return (
    <>
    <Nav/>
    <Hero/>
    <HeroFooter/>

    <Inspo/>

    <NFTS/>

    <Footer/>
    </>
  )
}

export default home