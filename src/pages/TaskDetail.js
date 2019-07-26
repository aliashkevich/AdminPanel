import React from 'react';
import TaskDetailCard from '../components/task/TaskDetailCard';
import BackTaskButton from '../components/task/BackTaskButton.js';

const TaskDetail = props => {
  return (
    <React.Fragment>
      <div className='main-panel'>
        <div className='content'>
          <div className='container-fluid'>
            <BackTaskButton />
            <TaskDetailCard id={props.location.pathname.split('/').pop()} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TaskDetail;
