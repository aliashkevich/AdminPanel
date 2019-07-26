import React from 'react';
import TasksTable from '../components/task/TasksTable';
import AddTaskButton from '../components/task/AddTaskButton';

export default function Tasks() {
  return (
    <React.Fragment>
      <div className='main-panel'>
        <div className='content'>
          <div className='container-fluid'>
            <AddTaskButton />
            <TasksTable />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
