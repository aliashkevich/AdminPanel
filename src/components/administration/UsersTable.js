import React from 'react';
import ActionsTable from '../global/ActionsTable';
import Spinner from '../global/Spinner';
import './UsersTable.css';
import {config} from '../../util/config.js';
import CircleImg from '../global/CircleImg';

export default class UsersTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loadingUsers: true,
      clients: [],
      loadingClients: true,
      projects: [],
      loadingProjects: true,
      roles: [],
      loadingRoles: true,
      updated: false,
    };

    this.getUsersData = this.getUsersData.bind(this);
    this.deleteOnClick = this.deleteOnClick.bind(this);
  }

  getUsersData() {
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
          loadingClients: false,
        });
      })
      .catch(error => console.log(error))
      .then(
        fetch(`${config.apiUrl}/projects`, {
          headers: new Headers({
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json',
          }),
        })
          .then(res => res.json())
          .then(data => {
            this.setState({
              projects: data.projects,
              loadingProjects: false,
            });
          })
          .catch(error => console.log(error))
          .then(
            fetch(`${config.apiUrl}/roles`, {
              headers: new Headers({
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json',
              }),
            })
              .then(res => res.json())
              .then(data => {
                this.setState({
                  roles: data.roles,
                  loadingRoles: false,
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
                      updated: false,
                      loadingUsers: false,
                    });
                  })
                  .catch(error => console.log(error)),
              ),
          ),
      );
  }

  componentDidMount() {
    this.getUsersData();
  }

  deleteOnClick(user) {
    const options = {
      method: 'DELETE',
      headers: new Headers({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      }),
    };
    fetch(`${config.apiUrl}/users/${user.id}`, options)
      .then(this.setState({updated: true}))
      .catch(error => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.updated !== prevState.updated) {
      this.getUsersData();
    }
  }

  render() {
    function findInArray(array, arrayItemKey, value, arrayItemProperty) {
      var item = array.find(arrayItem => arrayItem[arrayItemKey] === value);
      return item ? item[arrayItemProperty] : '';
    }

    if (
      this.state.loadingClients ||
      this.state.loadingProjects ||
      this.state.loadingRoles ||
      this.state.loadingUsers
    ) {
      return <Spinner spinnerPosition={'global-spinner'} />;
    } else {
      return (
        <ActionsTable
          entities={this.state.users}
          tableName={'Users'}
          tableHead={['', 'Name', 'Email', 'Client', 'Project', 'Role']}
          tableData={this.state.users.map(user => [
            <CircleImg logo={user.image} />,
            user.name,
            user.email,
            user.clientId
              ? findInArray(this.state.clients, 'id', user.clientId, 'name')
              : null,
            user.projectId
              ? findInArray(this.state.projects, 'id', user.projectId, 'title')
              : null,
            user.roleId
              ? findInArray(this.state.roles, 'id', user.roleId, 'name')
              : null,
          ])}
          tableColor={'success'}
          pathName={'users'}
          deleteOnClick={this.deleteOnClick}
          confirmationFieldName={'name'}
        />
      );
    }
  }
}
