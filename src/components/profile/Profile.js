import React from 'react';

export default function Profile() {
  let userFromStorage = localStorage.getItem('user');
  let parsedUser = JSON.parse(userFromStorage);
  return (
    <React.Fragment>
      <div className='wrapper row'>
        <div className='col-lg-4 col-md-8 col-sm-10 text-center'>
          <div className='card card-profile'>
            <div className='card-avatar'>
              <a href='#edit'>
                <img className='img' src={parsedUser.image} alt='profile' />
              </a>
            </div>
            <div className='card-body'>
              <h4 className='card-title'>{parsedUser.name}</h4>
              <h6 className='card-category text-gray'>{parsedUser.role_id}</h6>
              <p className='card-description'>{parsedUser.email}</p>
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
