import React from 'react';

export default function Profile() {
  return (
    <React.Fragment>
      <div class='wrapper row'>
        <div class='col-lg-4 col-md-8 col-sm-10'>
          <div class='card card-profile'>
            <div class='card-avatar'>
              <a href='#edit'>
                <img class='img' src='../assets/img/faces/marc.jpg' />
              </a>
            </div>
            <div class='card-body'>
              <h4 class='card-title'>Name</h4>
              <h6 class='card-category text-gray'>Role (client_ID/role_ID)</h6>
              <p class='card-description'>E-mail: Mail@address.com</p>
              <a href='#edit' class='btn btn-warning btn-round'>
                Edit
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
