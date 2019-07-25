import React from 'react';
import PropTypes from 'prop-types';
import './Popup.css';

export default function Popup(props) {
  const {error, onClose} = props;
  return (
    <div
      className='alert alert-warning alert-dismissible fade show popup popup-cursor'
      role='alert'
      onClick={onClose}>
      <div className='popupWrapper'>
        {error}
        <button type='button' />
      </div>
    </div>
  );
}
Popup.propTypes = {
  error: PropTypes.string,
};
