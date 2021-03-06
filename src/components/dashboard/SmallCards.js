import React from 'react';
import {config} from '../../util/config.js';
import Spinner from '../global/Spinner';

export default class SmallCards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      clients: [],
      users: [],
      didMount: false,
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    fetch(`${config.apiUrl}/clients`, {
      headers: new Headers({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      }),
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          clients: data.clients,
        });
      })
      .catch(error => console.log(error))
      .then(
        fetch(`${config.apiUrl}/users`, {
          headers: new Headers({
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json',
          }),
        })
          .then(res => res.json())
          .then(data => {
            this.setState({
              users: data.users,
              loading: false,
            });
          })
          .catch(error => console.log(error)),
      );
  }

  componentDidMount() {
    this.getData();
    this.setState({didMount: true});
  }

  render() {
    const {didMount} = this.state;
    return (
      <React.Fragment>
        <div className='col-lg-3 col-md-3 col-sm-6'>
          {this.state.loading ? (
            <Spinner spinnerPosition={'inline-spinner'} />
          ) : (
            <div className='card card-stats'>
              <div
                className={`card-header card-header-success card-header-icon bounce-in ${didMount &&
                  'visible'}`}>
                <div className='card-icon'>
                  <i className='material-icons'>group</i>
                </div>
                <p className='card-category'>Clients</p>
                <h3 className='card-title'>{this.state.clients.length}</h3>
              </div>
              <div className='card-footer'>
                <div className='stats'>
                  <i className='material-icons'>date_range</i> Last 24 Hours
                </div>
              </div>
            </div>
          )}
        </div>

        <div className='col-lg-3 col-md-3 col-sm-6'>
          {this.state.loading ? (
            <Spinner spinnerPosition={'inline-spinner'} />
          ) : (
            <div className='card card-stats'>
              <div
                className={`card-header card-header-success card-header-icon bounce-in ${didMount &&
                  'visible'}`}>
                <div className='card-icon'>
                  <i className='material-icons'>person_outline</i>
                </div>
                <p className='card-category'>Users</p>
                <h3 className='card-title'>{this.state.users.length}</h3>
              </div>
              <div className='card-footer'>
                <div className='stats'>
                  <i className='material-icons'>update</i> Just Updated
                </div>
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}
