import React from 'react';
import { useLocation } from 'react-router-dom';
import model1 from '../assets/model1.png';
import './AiConvo.css';

function AiConvo() {
  const { state } = useLocation();
  const image = state?.image || model1;

  const bars = [...Array(36)].map((_, i) => (
    <div
      key={i}
      className='audio-bar'
      style={{
        transform: `rotate(${i * (360 / 36)}deg) translateY(-150px)` // Adjust positioning to ensure bars form a ring
      }}
    ></div>
  ));

  return (
    <div className='aiconvo-container flex justify-center items-center min-h-screen bg-gray-900'>
      <div className='relative flex justify-center items-center'>
        <img src={image} alt='Selected Model' className='model-image' />
        <div className='audio-bar-container'>
          <div className='audio-bar-wrapper'>
            {bars}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiConvo;
