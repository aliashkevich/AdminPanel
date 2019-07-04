import React from 'react';

function WelcomeBanner() {
  let userFromStorage = localStorage.getItem('user');
  let parsedUser = JSON.parse(userFromStorage);
  return (
    <React.Fragment>
      <div class='card'>
        <div class='card-body'>Welcome {parsedUser.name}</div>
      </div>
    </React.Fragment>
  );
}

export default WelcomeBanner;
