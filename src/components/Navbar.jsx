import React, { useState } from 'react';
import { FaHome, FaComments, FaRobot, FaHeart, FaIdBadge } from 'react-icons/fa';
import Logo from '../assets/logo.jpeg';
import './Navbar.css'; // Import the CSS file for animations
import { Link } from 'react-router-dom';

function Navbar() {
  const [liked, setLiked] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleHeartClick = () => {
    setLiked(!liked);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 500); // Remove animation after 500ms
  };

  return (
    <div className='fixed bottom-6 left-0 w-full flex justify-center z-50'>
      <nav className='w-11/12 h-16 bg-slate-400 rounded-full flex items-center justify-between px-4 lg:px-8'>
        
        <div className='hidden lg:flex'>
          <img src={Logo} alt='Logo' className='h-14 rounded-full' />
        </div>

        <div className='flex justify-center items-center gap-x-44 lg:gap-12 w-full lg:w-auto'>
          <Link to='/' className='block lg:hidden flex-1 text-center pl-8'>
            <FaHome className='text-3xl text-gray-700 hover:text-yellow-500 transition-transform duration-300 transform hover:scale-125' />
          </Link>
          <Link to='/aiconvo' className='block lg:hidden flex-1 text-center'>
            <FaRobot className='text-3xl text-gray-700 hover:text-yellow-500 transition-transform duration-300 transform hover:scale-125' />
          </Link>
          <Link to='/chat' className='block lg:hidden flex-1 text-center'>
            <FaComments className='text-3xl text-gray-700 hover:text-yellow-500 transition-transform duration-300 transform hover:scale-125' />
          </Link>

          <Link to='/' className='hidden lg:block text-xl text-gray-700 hover:text-yellow-500'>Home</Link>
          <Link to='/aiconvo' className='hidden lg:block text-xl text-gray-700 hover:text-yellow-500'>AI-Convo</Link>
          <Link to='/chat' className='hidden lg:block text-xl text-gray-700 hover:text-yellow-500'>Chat</Link>
        </div>

        <div className='hidden lg:flex gap-4'>
          {/* Heart Icon with Instagram-like Animation */}
          <button onClick={handleHeartClick} className='relative'>
            <FaHeart className={`text-2xl transition-colors duration-300 ${liked ? 'text-red-500' : 'text-gray-700'} hover:text-red-500 ${animate ? 'heart-burst' : ''}`} />
          </button>
          <Link to='#contact'>
            <FaIdBadge className='text-2xl text-gray-700 hover:text-yellow-500 transition-transform duration-300 transform hover:scale-125' />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
