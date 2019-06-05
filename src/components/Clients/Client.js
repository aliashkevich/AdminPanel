import React from 'react';

export default class Client extends React.Component {
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
      <tr>
        <td className='text-center'>{this.state.id}</td>
        <td>{this.state.initials}</td>
        <td>{this.state.name}</td>
        <td className='td-actions text-right'>
          <button
            type='button'
            className='btn btn-success btn-fab btn-fab-mini btn-round'
            data-original-title='Edit Client'>
            <i className='material-icons'>edit</i>
          </button>
          <button
            type='button'
            className='btn btn-danger btn-sm btn-fab btn-fab-mini btn-round'
            data-original-title='Remove'>
            <i className='material-icons'>close</i>
          </button>
        </td>
      </tr>
    );
  }
}
