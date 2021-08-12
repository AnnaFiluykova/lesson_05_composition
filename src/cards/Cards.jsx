import React, { Fragment } from 'react';

import Card from './components/Card';
import Card2 from './components/Card2';

import './style.css';

const Cards = () => {
  return (
    <div className='cards-container'>
      <Card />
      <Card2 />
    </div>
  )
};

export default Cards;
