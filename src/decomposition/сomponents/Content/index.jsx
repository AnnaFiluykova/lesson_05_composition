import React from 'react';
import './style.css';

import Img from '../../images/bros.jpg';

const Content = () => {
  return (
    <div className='content'>
      <img src={Img} alt='Яндекс' className='img__content'/>
      <form className='form'>
        <input type='text' placeholder='Найдется все' className='text'/>
        <input type='submit' value='НАЙТИ' className='submit'/>
      </form>
    </div>
  )
}

export default Content;
