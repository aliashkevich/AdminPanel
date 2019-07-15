import React from 'react';
import {config} from '../../util/config.js';
import Spinner from '../global/Spinner';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      roles: [],
      loadingRoles: true,
    };
  }

  componentDidMount() {
    fetch(`${config.apiUrl}/roles`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          roles: data.roles,
          loadingRoles: false,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    let userFromStorage = localStorage.getItem('user');
    let parsedUser = JSON.parse(userFromStorage);

    if (this.state.loadingRoles) {
      return <Spinner />;
    } else {
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
                  <h6 className='card-category text-gray'>
                    {parsedUser.roleId
                      ? this.state.roles.find(
                          role => role.id === parsedUser.roleId,
                        ).name
                      : null}
                  </h6>
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
  }
}
