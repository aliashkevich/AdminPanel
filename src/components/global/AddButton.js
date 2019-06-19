import React from 'react';
import PropTypes from 'prop-types';

export default function AddButton(props) {
  const {buttonName} = props;
  return (
    <button type='button' className='btn btn-success'>
      <i className='material-icons'>add_circle</i>
      {' ' + buttonName}
    </button>
  );
}

AddButton.propTypes = {
  tableName: PropTypes.string,
};
