import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  img: PropTypes.string,
  children: PropTypes.element
}

const NewsItem = (props) => {
  return (
    <div className='news__item'>
      <img src={props.img} alt='' className='news__image' />
      {props.children}
    </div>
  )
}

NewsItem.propTypes = propTypes;

export default NewsItem;
