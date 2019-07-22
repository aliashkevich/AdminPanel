import React from 'react';
import BackButton from '../global/BackButton';
import {Link} from 'react-router-dom';

export default function BackTaskButton() {
  const buttonName = 'Back';
  return (
    <React.Fragment>
      <Link className='text-light' to='/tasks'>
        <BackButton buttonName={buttonName} />
      </Link>
    </React.Fragment>
  );
}
