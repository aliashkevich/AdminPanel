import React from 'react';

function ProjectSummary(props) {
  const start_date = props.project.start_date.slice(0, 10);
  const end_date = props.project.end_date.slice(0, 10);
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
                {start_date} ~ {end_date}
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
