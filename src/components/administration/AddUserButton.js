import React from 'react';
import AddButton from '../global/AddButton';
import {Link} from 'react-router-dom';

export default function AddUserButton() {
  const buttonName = 'New User';

  return (
    <React.Fragment>
      <Link className='text-light' to='administration/users/new'>
        <AddButton buttonName={buttonName} />
      </Link>
    </React.Fragment>
  );
}
