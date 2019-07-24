import React from 'react';
import {Link} from 'react-router-dom';
import ActionsTable from '../global/ActionsTable';
import Spinner from '../global/Spinner';
import {config} from '../../util/config.js';

export default class ClientsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [],
      updated: false,
      loading: true,
    };

    this.getClients = this.getClients.bind(this);
    this.deleteOnClick = this.deleteOnClick.bind(this);
  }

  componentDidMount() {
    this.getClients();
  }

  getClients() {
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
          updated: false,
          loading: false,
        });
      })
      .catch(error => console.log(error));
  }

  deleteOnClick(client) {
    const options = {
      method: 'DELETE',
      headers: new Headers({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      }),
    };
    fetch(`${config.apiUrl}/clients/${client.id}`, options)
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
      <Link
        to={{
          pathname: `/clients/${client.id}`,
          state: {
            id: client.id,
          },
        }}
        className='text-info'>
        {client.initials}
      </Link>,
      client.name,
    ]);

    return (
      <React.Fragment>
        {this.state.loading ? (
          <Spinner spinnerPosition={'global-spinner'} />
        ) : (
          <ActionsTable
            entities={this.state.clients}
            tableName={'Clients'}
            tableHead={['ID', 'Initials', 'Name']}
            tableData={tableData}
            tableColor={'primary'}
            deleteOnClick={this.deleteOnClick}
            confirmationFieldName={'name'}
          />
        )}
      </React.Fragment>
    );
  }
}
