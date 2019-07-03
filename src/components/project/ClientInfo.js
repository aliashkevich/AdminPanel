import React from 'react';
import CircleImg from './CircleImg';

function ClientInfo() {
  return (
    <div className='col-lg-4 col-md-12 col-sm-12'>
      <div className='card card-stats'>
        <div className='card-header card-header-info card-header-icon'>
          <div className='card-icon'>
            <i className='material-icons'>location_city</i>
          </div>
          <div className='container-fluid' style={{padding: '10px'}}>
            <p className='card-category' style={{paddingBottom: '5px'}}>
              Client Information
            </p>
            <CircleImg />
            <p style={{color: 'grey'}}>Lesewert 2018</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientInfo;
