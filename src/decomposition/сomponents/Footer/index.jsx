import React from 'react';

import './style.css';
import Img from '../../images/ad.jpg';
import NewsFooter from '../NewsFooter';

const Footer = () => {
  return (
    <div className="footer">
      <div><img src={Img} alt='' className='img__footer' /></div>
      <NewsFooter />
    </div>
  )
}

export default Footer;
