import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node
}

const NewsFooterItem = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

NewsFooterItem.propTypes = propTypes;

export default NewsFooterItem;
