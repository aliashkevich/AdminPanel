import React from 'react';
import BackButton from '../global/BackButton';
import {Link} from 'react-router-dom';

export default function BackProjectButton() {
  const buttonName = 'Back';
  return (
    <React.Fragment>
      <Link className='text-light' to='/projects'>
        <BackButton buttonName={buttonName} />
      </Link>
    </React.Fragment>
  );
}
