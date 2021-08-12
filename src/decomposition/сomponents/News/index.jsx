import React from 'react';

import NewsItem from './NewsItem';

import Data from './data';
import './style.css';

const News = () => {
  return (
    <div>
      <div className='news__tabs'>
        <div>Сейчас в СМИ</div>
        <div>В Германии</div>
        <div>Рекомендуем</div>
      </div>
      <div>
        {Data.map((item, index) => {
          return (
            <NewsItem img={item.icon} key={`news-${index}`}>{item.title}</NewsItem>
          )
        })}
      </div>
    </div>
  )
}

export default News;
