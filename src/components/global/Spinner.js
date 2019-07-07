import React from 'react';
import PropTypes from 'prop-types';
import './Spinner.css';

Spinner.propTypes = {
  spinnerPosition: PropTypes.string,
};

export default function Spinner(props) {
  const {spinnerPosition} = props;
  return (
    <div className={`spinner-wrapper text-center ${spinnerPosition}`}>
      <div className='spinner'>
        <div className='lds-roller'>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <p className='loading-message'>Loading...</p>
      </div>
    </div>
  );
}
