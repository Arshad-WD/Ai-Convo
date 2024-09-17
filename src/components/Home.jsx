import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import modelImg1 from '../assets/model1.png';
import modelImg2 from '../assets/model2.png';
import modelImg3 from '../assets/model3.png';
import modelImg4 from '../assets/model4.png';

function Home() {
  const [mainImage, setMainImage] = useState(modelImg1); // Track selected image
  const navigate = useNavigate();

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const handleStartChatClick = () => {
    if (mainImage) {
      navigate('/aiconvo', { state: { image: mainImage } });
    } else {
      // Optionally, show an alert or some indication that no image is selected
      alert('Please select an image first.');
    }
  };

  return (
    <div className='home-container flex flex-col lg:flex-row justify-between items-center min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 p-4 lg:p-8'>
      
      <div className='left-section flex-1 relative'>
        <h1 className='text-[6rem] lg:text-[10rem] font-bold text-white opacity-20 absolute top-10 lg:top-24 left-4'>
          AI Chat
        </h1>
        {mainImage && (
          <img
            src={mainImage}
            alt='Main Model'
            className='w-full lg:w-[80%] relative z-10 rounded-3xl shadow-2xl transition-transform hover:scale-105'
          />
        )}
      </div>

      <div className='right-section flex-1 bg-gray-800 p-6 rounded-3xl shadow-lg lg:ml-8'>
        <h2 className='text-4xl lg:text-5xl font-bold text-white mb-6'>
          AI Conversations
        </h2>
        <p className='text-gray-400 text-lg mb-4'>
          Explore AI-enhanced conversations designed to augment human-machine interactions. Experience fluid, intelligent dialogue that adapts to your needs, combining innovation with a touch of creativity.
        </p>
        <div className='mb-6'>
          <button 
            className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition'
            onClick={handleStartChatClick}
          >
            Start Chatting
          </button>
        </div>

        <div className='gallery grid grid-cols-2 gap-4'>
          <div
            className={`rounded-xl shadow-lg cursor-pointer transition-transform hover:scale-105 ${
              mainImage === modelImg1 ? 'border-4 border-purple-500' : ''
            }`}
            onClick={() => handleImageClick(modelImg1)}
          >
            <img src={modelImg1} alt='model-1' className='w-full h-full rounded-xl' />
          </div>
          <div
            className={`rounded-xl shadow-lg cursor-pointer transition-transform hover:scale-105 ${
              mainImage === modelImg2 ? 'border-4 border-purple-500' : ''
            }`}
            onClick={() => handleImageClick(modelImg2)}
          >
            <img src={modelImg2} alt='model-2' className='w-full h-full rounded-xl' />
          </div>
          <div
            className={`rounded-xl shadow-lg cursor-pointer transition-transform hover:scale-105 ${
              mainImage === modelImg3 ? 'border-4 border-purple-500' : ''
            }`}
            onClick={() => handleImageClick(modelImg3)}
          >
            <img src={modelImg3} alt='model-3' className='w-full h-full rounded-xl' />
          </div>
          <div
            className={`rounded-xl shadow-lg cursor-pointer transition-transform hover:scale-105 ${
              mainImage === modelImg4 ? 'border-4 border-purple-500' : ''
            }`}
            onClick={() => handleImageClick(modelImg4)}
          >
            <img src={modelImg4} alt='model-4' className='w-full h-full rounded-xl' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
