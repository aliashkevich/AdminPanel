import React from 'react';

function TaskSummary(props) {
  return (
    <div className='card'>
      <div className='card-header card-header-text card-header-rose'>
        <div className='card-text'>
          <h4 className='card-title'>Summary</h4>
        </div>
      </div>
      <div className='card-body'>{props.task.summary}</div>
    </div>
  );
}

export default TaskSummary;
