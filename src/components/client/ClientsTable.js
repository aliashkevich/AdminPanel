import React from 'react';
import {Link} from 'react-router-dom';
import ActionsTable from '../global/ActionsTable';

export default class ClientsTable extends React.Component {
  static defaultProps = {
    url: 'https://lesewert.herokuapp.com/api/v1',
  };

  constructor(props) {
    super(props);

    this.state = {
      clients: [],
    };

    this.getClients = this.getClients.bind(this);
    this.deleteOnClick = this.deleteOnClick.bind(this);
  }

  componentDidMount() {
    this.getClients();
  }

  getClients() {
    fetch(`${this.props.url}/clients`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          clients: data.clients,
        });
      })
      .catch(error => console.log(error));
  }

  deleteOnClick(client) {
    const options = {
      method: 'DELETE',
    };
    fetch(`${this.props.url}/clients/${client.id}`, options)
      .then(res => {
        window.location.reload();
      })
      .catch(error => console.log(error));
  }

  render() {
    const tableData = this.state.clients.map(client => [
      client.id,
      <Link to={`/clients/${client.id}`} className='text-info'>
        {client.initials}
      </Link>,
      client.name,
    ]);

    return (
      <ActionsTable
        entities={this.state.clients}
        tableName={'Clients'}
        tableHead={['ID', 'Initials', 'Name']}
        tableData={tableData}
        tableColor={'primary'}
        deleteOnClick={this.deleteOnClick}
        confirmationFieldName={'name'}
      />
    );
  }
}
