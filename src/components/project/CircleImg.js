import React from 'react';

function CircleImg(props) {
  return (
    <img
      className='card-img-top'
      style={{
        width: '3rem',
        borderRadius: '50%',
        paddingRight: '5px',
      }}
      src={props.logo}
      alt='participant'
    />
  );
}

export default CircleImg;
