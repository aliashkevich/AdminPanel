import React from 'react';

export default function Profile() {
  return (
    <React.Fragment>
      <div className='wrapper row'>
        <div className='col-lg-4 col-md-8 col-sm-10 text-center'>
          <div className='card card-profile'>
            <div className='card-avatar'>
              <a href='#edit'>
                <img className='img' src='../assets/img/faces/marc.jpg' />
              </a>
            </div>
            <div className='card-body'>
              <h4 className='card-title'>Ricardo Schmidt</h4>
              <h6 className='card-category text-gray'>
                Role (client_ID/role_ID)
              </h6>
              <p className='card-description'>Email: ricardo@lesewert.com</p>
              <a href='#edit' className='btn btn-warning btn-round'>
                Edit
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
