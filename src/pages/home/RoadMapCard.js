import React from 'react';
import PropTypes from 'prop-types';

function RoadMapCard(props) {
  const { title = '-NA-', date = '-NA-', children = '-NA-' } = props;
  return (
    <div className='col'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <h6 className='card-subtitle mb-2 text-muted'>{date}</h6>
          <p className='card-text'>{children}</p>
        </div>
      </div>
    </div>
  );
}

RoadMapCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default RoadMapCard;
