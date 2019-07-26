import React from 'react';
import PropTypes from 'prop-types';

function AddButton(props) {
  const {buttonName, visible} = props;
  return (
    <button
      type='button'
      className={`btn btn-success add-button grow ${visible}`}>
      <i className='material-icons'>add_circle</i>
      {` ${buttonName}`}
    </button>
  );
}

AddButton.propTypes = {
  tableName: PropTypes.string,
};

export default AddButton;
