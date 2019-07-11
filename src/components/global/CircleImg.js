import React from 'react';
import nullAvatar from '../../img/nullAvatar.png';

function CircleImg(props) {
  return (
    <img
      className='card-img-top circle-img'
      src={props.logo ? props.logo : nullAvatar}
      alt='client'
    />
  );
}

export default CircleImg;
