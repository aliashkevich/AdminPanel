import React from 'react';
import PropTypes from 'prop-types';
import './Popup.css';

export default function Popup(props) {
  const {error} = props;
  return (
    <div className='alert alert-warning' role='alert'>
      <div className='popupWrapper'>
        {error}
        <button
          type='button'
          className='close'
          data-dismiss='alert'
          aria-label='Close'>
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
    </div>
  );
}
Popup.propTypes = {
  error: PropTypes.string,
};
