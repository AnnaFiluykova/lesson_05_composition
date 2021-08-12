import React from 'react';

import Items from '../items';
import NewsFooterItem from './NewsFooterItem';
import './style.css';

const NewsFooter = () => {
  return (
    <div className='news__footer'>
      {Items.map((item) => {
        return (
        <div className='item'>
          <NewsFooterItem>
            <div className='news__footer-title'>{item.title}</div>
            <div>{item.text}</div>
          </NewsFooterItem>
        </div>
        )
      })}
    </div>
  )
}

export default NewsFooter;
