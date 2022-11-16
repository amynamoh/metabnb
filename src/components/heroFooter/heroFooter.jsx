import React from 'react'
import './heroFooter.css'
import MBTOKEN from '../../assets/mbtoken.svg'
import METAMASK from '../../assets/metamask.svg'
import OPENSEA from '../../assets/opensea.svg'

const heroFooter = () => {
  return (
    <div className="heroFooter">
        <img src={MBTOKEN} alt="" />
        <img src={METAMASK} alt="" />
        <img src={OPENSEA} alt="" />
    </div>
  )
}

export default heroFooter








