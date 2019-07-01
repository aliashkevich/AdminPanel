import React from 'react';
import AddButton from '../global/AddButton';
import {Link} from 'react-router-dom';

export default function AddTaskButton() {
  const buttonName = 'New Task';

  return (
    <React.Fragment>
      <Link className='text-light' to='/tasks/new'>
        <AddButton buttonName={buttonName} />
      </Link>
    </React.Fragment>
  );
}
