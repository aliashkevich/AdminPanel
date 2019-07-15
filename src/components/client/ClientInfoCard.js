import React from 'react';
import {config} from '../../util/config.js';

export default class ClientInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      client: {},
      clientId: '',
      contactInformation: {},
    };
    this.getClient = this.getClient.bind(this);
  }
  getClient() {
    fetch(`${config.apiUrl}/clients/${this.props.clientId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          client: data.client,
          clientId: data.client.id,
          contactInformation: data.client.contactInformation,
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getClient();
  }

  render() {
    // console.log(this.state);
    return (
      <div className='col-lg-4 col-md-12 col-sm-12'>
        <div className='card card-stats'>
          <div className='card-header card-header-primary card-header-icon'>
            <div className='card-icon'>
              <i className='material-icons'>location_city</i>
            </div>
            <div className='container-fluid container-padding'>
              <p className='card-category font-grey'>
                Id: {this.state.client.id}
              </p>
              <p className='card-category font-grey'>
                Initials: {this.state.client.initials}
              </p>
              <p className='card-category font-grey'>
                Email: {this.state.contactInformation.email}
              </p>
              <p className='card-category font-grey'>
                Number: {this.state.contactInformation.number}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
