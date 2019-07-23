import React from 'react';
import {config} from '../../util/config.js';
import Spinner from '../global/Spinner';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      roles: [],
      loadingRoles: true,
      user: {},
      loadingUser: true,
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
      .catch(error => console.log(error))
      .then(
        fetch(
          `${config.apiUrl}/users/${
            JSON.parse(localStorage.getItem('user')).id
          }`,
        )
          .then(res => res.json())
          .then(data => {
            this.setState({
              user: data.user,
              loadingUser: false,
            });
          })
          .catch(error => console.log(error)),
      );
  }

  render() {
    if (this.state.loadingRoles) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <div className='wrapper row'>
            <div className='col-lg-4 col-md-8 col-sm-10 text-center'>
              <div className='card card-profile'>
                <div className='card-avatar'>
                  <img
                    className='img'
                    src={this.state.user.image}
                    alt='profile'
                  />
                </div>
                <div className='card-body'>
                  <h4 className='card-title'>{this.state.user.name}</h4>
                  <h6 className='card-category text-gray'>
                    {this.state.user.roleId
                      ? this.state.roles.find(
                          role => role.id === this.state.user.roleId,
                        ).name
                      : null}
                  </h6>
                  <p className='card-description'>{this.state.user.email}</p>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}
