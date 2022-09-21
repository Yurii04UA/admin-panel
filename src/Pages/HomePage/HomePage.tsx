import React from 'react';
import MainContent from '../MainContent/MainContent';
import Sitebar from '../Sitebar/Sitebar';
import './HomePage.scss'

const HomePage = () => {
  return (
    <div className='homepage'>
      <Sitebar />
      <MainContent />
    </div>
  )
}

export default HomePage;