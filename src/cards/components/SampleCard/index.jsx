import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  children: PropTypes.node
};

const SampleCard = (props) => {
  return (
    <div className='Card'>
      <h3 className='Card-title'>{props.title}</h3>
      <div className='Card-body'>
        {props.img && <img src={props.img} className='img'/>}
        {props.children}
      </div>
    </div>
  )
}

SampleCard.propTypes = propTypes;

export default SampleCard;
