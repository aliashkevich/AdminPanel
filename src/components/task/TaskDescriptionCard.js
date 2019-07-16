import React from 'react';

function TaskDescriptionCard(props) {
  return (
    <div className='card'>
      <div className='card-header card-header-text card-header-rose'>
        <div className='card-text'>
          <h4 className='card-title'>Description</h4>
        </div>
      </div>
      <div className='card-body'>{props.task.description}</div>
    </div>
  );
}

export default TaskDescriptionCard;
