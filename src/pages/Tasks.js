import React from 'react';
import Header from '../components/Header';
import TasksTable from '../components/task/TasksTable';
import AddTaskButton from '../components/task/AddTaskButton';

export default function Tasks() {
  return (
    <React.Fragment>
      <Header />
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
