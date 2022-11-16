import React, { useRef, useEffect, useCallback } from 'react';
// import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import Metamask from '../../assets/metamaskC.png'
import Wallet from '../../assets/WalletC.png'
import Chevron from '../../assets/Chevron.png'
import './modal.css'

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(64, 64, 64, 0.3);
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000000;
  display: flex;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;   

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 24px;
  right: 32px;
  font-size: 24px;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
            <ModalWrapper showModal={showModal}>
              <div className="modal">
                <h3>Connect Wallet</h3>
                <h5>Choose your preferred wallet</h5>
                <div className="connect">
                  <div className="connectD">
                    <img src={Metamask} alt="" />
                    <h4>Metamask</h4>
                  </div>
                  <img src={Chevron} alt="" id='chevron' />
                </div>
                <div className="connect">
                  <div className="connectD">
                    <img src={Wallet} alt="" />
                    <h4>Metamask</h4>
                  </div>
                  <img src={Chevron} alt="" id='chevron' />
                </div>
              </div>
              <CloseModalButton aria-label='Close modal'onClick={() => setShowModal(prev => !prev)}/>
            </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};