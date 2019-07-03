import React from 'react';

function CircleImg() {
  return (
    <img
      className='card-img-top'
      style={{
        width: '3rem',
        borderRadius: '50%',
        paddingRight: '5px',
      }}
      src='https://i.pravatar.cc/300'
      alt='participant'
    />
  );
}

export default CircleImg;
