import React from 'react';

export default class ClientCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.client.id,
      name: this.props.client.name,
      initials: this.props.client.initials,
      logo: this.props.client.logo,
      email: this.props.client.contact_information.email,
      number: this.props.client.contact_information.number,
    };
  }

  render() {
    return (
      <div class='col-md-6'>
        <div class='card'>
          <div class='card-header card-header-text card-header-primary'>
            <div class='card-text'>
              <h4 class='card-title'>{this.state.name}</h4>
            </div>
          </div>
          <div class='card-body'>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to "Naviglio" where you can enjoy the main night life
            in Barcelona...
          </div>
        </div>
      </div>
    );
  }
}
