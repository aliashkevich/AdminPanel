import React from 'react';
import PropTypes from 'prop-types';

export default function BackButton(props) {
  const {buttonName} = props;
  return (
    <button type='button' className='btn'>
      <i className='material-icons'>arrow_back</i>
      {` ${buttonName}`}
    </button>
  );
}

BackButton.propTypes = {
  tableName: PropTypes.string,
};
