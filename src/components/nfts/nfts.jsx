import React from 'react'
import './nfts.css'
import NFT from '../../assets/nft.png'



const nfts = () => {
  return (
    <div className='nft'>
        <div className="nftLeft">
            <h2>Metabnb NFTs</h2>
            <h5>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</h5>
            <a href='' className='btn btnS'>Learn More</a>
        </div>
        <div className="nftRight">
            <img src={NFT} id="nftImg" alt="" />
        </div>
    </div>
  )
}

export default nfts