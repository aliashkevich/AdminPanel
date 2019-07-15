import React from 'react';
import {getLocalDateFromUTC} from '../../util/date';

function ProjectSummary(props) {
  const startDate = getLocalDateFromUTC(props.project.startDate);
  const endDate = getLocalDateFromUTC(props.project.endDate);
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
