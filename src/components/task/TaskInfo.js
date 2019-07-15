import React from 'react';
import {config} from '../../util/config.js';
import Spinner from '../global/Spinner';
import {getLocalDateFromUTC} from '../../util/date';

export default class TaskInfo extends React.Component {
  render() {
    return (
      <div className='col-lg-4 col-md-12 col-sm-12'>
        <div className='card card-stats'>
          <div className='card-header card-header-info card-header-icon'>
            <div class='card-text'>
              <h4 class='card-title '>Status: {this.props.task.status}</h4>
            </div>
            <h3 className='card-title font-grey'>
              {this.props.task.estimation}
            </h3>
          </div>
          <div className='container-fluid container-padding'>
            <p>
              <b>Start Date:</b>{' '}
              {getLocalDateFromUTC(this.props.task.startDate)}
            </p>
            <p>
              <b>End Date:</b> {getLocalDateFromUTC(this.props.task.endDate)}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
