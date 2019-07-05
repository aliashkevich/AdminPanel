import React from 'react';

function Other() {
  return (
    <React.Fragment>
      <div className='col-lg-3 col-md-3 col-sm-6'>
        <div className='card card-stats'>
          <div className='card-header card-header-success card-header-icon'>
            <div className='card-icon'>
              <i className='material-icons'>group</i>
            </div>
            <p className='card-category'>Clients</p>
            <h3 className='card-title'>246</h3>
          </div>
          <div className='card-footer'>
            <div className='stats'>
              <i className='material-icons'>date_range</i> Last 24 Hours
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-3 col-md-3 col-sm-6'>
        <div className='card card-stats'>
          <div className='card-header card-header-info card-header-icon'>
            <div className='card-icon'>
              <i className='material-icons'>person_outline</i>
            </div>
            <p className='card-category'>Users</p>
            <h3 className='card-title'>+157</h3>
          </div>
          <div className='card-footer'>
            <div className='stats'>
              <i className='material-icons'>update</i> Just Updated
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Other;
