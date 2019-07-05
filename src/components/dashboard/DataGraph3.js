import React from 'react';
import Spinner from '../global/Spinner';

class DataGraph3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  someMethod() {
    this.forceUpdate();
  }

  render() {
    return (
      <React.Fragment>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div className='col-md-4'>
            <div className='card card-chart'>
              <div className='card-header card-header-danger'>
                <div className='ct-chart' id='completedTasksChart' />
              </div>
              <div className='card-body'>
                <h4 className='card-title'>Active Projects</h4>
                <p className='card-category'>Last Campaign Performance</p>
              </div>
              <div className='card-footer'>
                <div className='stats'>
                  <i className='material-icons'>access_time</i> updated 1 day
                  ago
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default DataGraph3;
