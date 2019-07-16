import React from 'react';
import TaskNew from '../components/task/TaskNew';

export default function NewTask() {
  return (
    <React.Fragment>
      <div className='main-panel'>
        <div className='content'>
          <TaskNew />
        </div>
      </div>
    </React.Fragment>
  );
}
