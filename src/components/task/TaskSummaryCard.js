import React from 'react';

function TaskSummary(props) {
  return (
    <div className='col-lg-8 col-md-12 col-sm-12'>
      <div className='card'>
        <div className='card-header card-header-text card-header-info'>
          <div className='card-text'>
            <h4 className='card-title'>Summary</h4>
          </div>
        </div>
        <div className='card-body'>{props.task.summary}</div>
      </div>
    </div>
  );
}

export default TaskSummary;
