import {useState} from 'react'
import { Modal } from '../modal/modal'
import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'


const Navbtn = () => {

  const[showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };
  return (
    <div>
        <Link href="" onClick={openModal} className='btn btnP'>Connect Wallet</Link>
        <Modal showModal={showModal} setShowModal={setShowModal} /> 
    </div>
  )
}

export default Navbtn