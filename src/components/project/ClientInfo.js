import React from 'react';
import {config} from '../../util/config.js';
import Spinner from '../global/Spinner';

export default class ClientInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      client: {},
      contactInformation: {},
      loading: true,
    };
    this.getClient = this.getClient.bind(this);
  }
  getClient() {
    fetch(`${config.apiUrl}/clients/${this.props.clientId}`, {
      headers: new Headers({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      }),
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          client: data.client,
          contactInformation: data.client.contactInformation,
          loading: false,
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getClient();
  }

  render() {
    return (
      <React.Fragment>
        {this.state.loading ? (
          <Spinner spinnerPosition={'inline-spinner'} />
        ) : (
          <div className='card card-stats'>
            <div className='card-header card-header-primary card-header-icon'>
              <div className='card-icon client-logo-wrapper'>
                <img
                  className='card-img-top client-logo'
                  src={
                    this.state.client.logo ? (
                      this.state.client.logo
                    ) : (
                      <i className='material-icons'>location_city</i>
                    )
                  }
                  alt='client logo'
                />
              </div>
              <h3 className='card-title'>{this.state.client.initials}</h3>
            </div>
            <div className='text-align'>
              <div>
                <p>Email: {this.state.contactInformation.email}</p>
                <hr />
                <p>Number: {this.state.contactInformation.number}</p>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
