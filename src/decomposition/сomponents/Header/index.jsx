import React from 'react';
import './style.css';

import News from '../News';
import Adwords from '../Adwords';

const Header = () => {
  return (
    <div className="header">
      <News className='news'/>
      <Adwords className='adwords'/>
    </div>
  )
}

export default Header;
