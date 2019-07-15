import React from 'react';
import {config} from '../../util/config.js';
import Spinner from '../global/Spinner';
import {tryStatement} from '@babel/types';

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
    fetch(`${config.apiUrl}/clients/${this.props.clientId}`)
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
      <div className='col-lg-4 col-md-12 col-sm-12'>
        {this.state.loading ? (
          <Spinner spinnerPosition={'inline-spinner'} />
        ) : (
          <div className='card card-stats'>
            <div className='card-header card-header-info card-header-icon'>
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
              <h3 className='card-title font-grey'>
                {this.state.client.initials}
              </h3>
              <p className='card-category'>Client Id: {this.state.client.id}</p>
            </div>
            <div className='container-fluid container-padding'>
              <p className='card-category font-grey'>
                Email: {this.state.contactInformation.email}
              </p>
              <p className='card-category font-grey'>
                Number: {this.state.contactInformation.number}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
