import React from 'react';

function ProjectSummary(props) {
  const startDate = props.project.startDate.slice(0, 10);
  const endDate = props.project.endDate.slice(0, 10);
  return (
    <div className='col-lg-8 col-md-12 col-sm-12'>
      <div className='card'>
        <div className='card-header card-header-text card-header-info'>
          <div className='card-text'>
            <h4 className='card-title'>Project Summary</h4>
          </div>
        </div>
        <div className='card-body'>
          <div>
            <p>
              Project Date:{' '}
              <span>
                {startDate} ~ {endDate}
              </span>
            </p>
          </div>
          {props.project.summary}
        </div>
      </div>
    </div>
  );
}

export default ProjectSummary;
