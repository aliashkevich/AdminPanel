import React from 'react';
import PropTypes from 'prop-types';
import './Popup.css';
export default function Popup(props) {
  const {error, onClose} = props;
  return (
    <div
      className='alert alert-warning alert-dismissible fade show popup popup-cursor validation-alert'
      role='alert'
      onClick={onClose}>
      <div className='popup-wrapper'>
        {error}
        <button className='hidden-button' type='button' />
        <span aria-hidden='true'>&times;</span>
      </div>
    </div>
  );
}
Popup.propTypes = {
  error: PropTypes.string,
};
