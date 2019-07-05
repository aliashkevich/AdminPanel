import React from 'react';
import Spinner from '../global/Spinner';

class DataGraph1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div className='col-md-4'>
            <div className='card card-chart'>
              <div className='card-header card-header-success'>
                <div className='ct-chart' id='dailySalesChart' />
              </div>
              <div className='card-body'>
                <h4 className='card-title'>Completed Tasks</h4>
                <p className='card-category'>
                  <span className='text-success'>
                    <i className='fa fa-long-arrow-up' /> 55%{' '}
                  </span>{' '}
                  increase in completed tasks.
                </p>
              </div>
              <div className='card-footer'>
                <div className='stats'>
                  <i className='material-icons'>access_time</i> updated 4
                  minutes ago
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default DataGraph1;
