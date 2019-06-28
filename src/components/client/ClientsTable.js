import React from 'react';
import {Link} from 'react-router-dom';
import ActionsTable from '../global/ActionsTable';

export default class ClientsTable extends React.Component {
  static defaultProps = {
    url: 'http://localhost:3000/api/v1',
  };

  constructor(props) {
    super(props);

    this.state = {
      clients: [],
      updated: false,
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
          updated: false,
        });
      })
      .catch(error => console.log(error));
  }

  deleteOnClick(client) {
    const options = {
      method: 'DELETE',
    };
    fetch(`${this.props.url}/clients/${client.id}`, options)
      .then(res => res.json())
      .then(this.setState({updated: true}))
      .catch(error => console.log(error));
    if (this.state.updated) {
      this.getClients();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.updated !== prevState.updated) {
      this.getClients();
    }
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
