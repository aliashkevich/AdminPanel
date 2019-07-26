import React from 'react';
import AddButton from '../global/AddButton';
import {NavLink} from 'react-router-dom';

export default function AddTaskButton() {
  const buttonName = 'New Task';

  return (
    <React.Fragment>
      <NavLink className='text-light' to='/tasks/new'>
        <AddButton buttonName={buttonName} />
      </NavLink>
    </React.Fragment>
  );
}
