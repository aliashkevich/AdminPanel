import React from 'react';

function CircleImg(props) {
  return (
    <img
      className='card-img-top circle-img'
      src={props.logo}
      alt='participant'
    />
  );
}

export default CircleImg;
