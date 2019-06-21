import React from 'react';
import AddButton from '../global/AddButton';
import {Link} from 'react-router-dom';

export default function AddProjectButton() {
  const buttonName = 'New Project';
  return (
    <React.Fragment>
      <Link className='text-light' to='/projects/new'>
        <AddButton buttonName={buttonName} />
      </Link>
    </React.Fragment>
  );
}
