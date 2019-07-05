import React from 'react';
import Spinner from '../global/Spinner';

class DataGraph2 extends React.Component {
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
              <div className='card-header card-header-warning'>
                <div className='ct-chart' id='websiteViewsChart' />
              </div>
              <div className='card-body'>
                <h4 className='card-title'>New Clients</h4>
                <p className='card-category'>Last Campaign Performance</p>
              </div>
              <div className='card-footer'>
                <div className='stats'>
                  <i className='material-icons'>access_time</i> updated 2 days
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

export default DataGraph2;
