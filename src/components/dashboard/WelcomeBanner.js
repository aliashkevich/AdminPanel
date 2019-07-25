import React from 'react';

function WelcomeBanner() {
  let userFromStorage = localStorage.getItem('user');
  let parsedUser = JSON.parse(userFromStorage);
  return (
    <React.Fragment>
      <div className='col-md-6'>
        <div className='card'>
          <div className='card-header card-header-text card-header-primary'>
            <div className='card-text'>
              <h4 className='card-title'>
                Welcome {parsedUser ? parsedUser.name : 'user'}
              </h4>
            </div>
          </div>
          <div className='card-body'>
            Welcome to our project dashboard. Feel free to add, edit and delete
            clients, projects and tasks! Click on their names in order to access
            the details.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default WelcomeBanner;
