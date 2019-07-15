import React from 'react';
import AddButton from '../global/AddButton';
import {Link} from 'react-router-dom';

export default function AddClientButton() {
  const buttonName = 'New Client';
  return (
    <React.Fragment>
      <Link className='text-light' to='/clients/new'>
        <AddButton buttonName={buttonName} />
      </Link>
    </React.Fragment>
  );
}
