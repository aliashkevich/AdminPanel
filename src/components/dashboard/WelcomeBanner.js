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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco...
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default WelcomeBanner;
