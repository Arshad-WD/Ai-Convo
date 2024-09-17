import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AiConvo from './components/AiConvo';
import Chat from './components/chat';

function App() {
  return (
    <Router>
      <div className='w-screen h-screen bg-black/90'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aiconvo' element={<AiConvo />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
