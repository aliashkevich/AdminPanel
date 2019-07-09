import React from 'react';
import CircleImg from './CircleImg';
import {config} from '../../util/config.js';

export default class ClientInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      client: {},
    };
    this.getClient = this.getClient.bind(this);
  }
  getClient() {
    fetch(`${config.apiUrl}/clients/${this.props.clientId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          client: data.client,
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
        <div className='card card-stats'>
          <div className='card-header card-header-info card-header-icon'>
            <div className='card-icon'>
              <i className='material-icons'>location_city</i>
            </div>
            <div className='container-fluid container-padding'>
              <p className='card-category title-padding'>Client Information</p>
              <CircleImg logo={this.state.client.logo} />
              <p className='font-grey'>{this.state.client.name}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
