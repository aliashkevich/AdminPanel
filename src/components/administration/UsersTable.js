import React from 'react';
import ActionsTable from '../global/ActionsTable';
import {Link} from 'react-router-dom';
import Spinner from '../global/Spinner';
import './UsersTable.css';
import nullAvatar from '../../img/nullAvatar.png';

export default class UsersTable extends React.Component {
  static defaultProps = {
    url: 'https://lesewert.herokuapp.com/api/v1',
  };

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
    fetch(`${this.props.url}/clients`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          clients: data.clients,
          loadingClients: false,
        });
      })
      .catch(error => console.log(error))
      .then(
        fetch(`${this.props.url}/projects`)
          .then(res => res.json())
          .then(data => {
            this.setState({
              projects: data.projects,
              loadingProjects: false,
            });
          })
          .catch(error => console.log(error))
          .then(
            fetch(`${this.props.url}/roles`)
              .then(res => res.json())
              .then(data => {
                this.setState({
                  roles: data.roles,
                  loadingRoles: false,
                });
              })
              .catch(error => console.log(error))
              .then(
                fetch(`${this.props.url}/users`)
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
    };
    fetch(`${this.props.url}/users/${user.id}`, options)
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
      return <Spinner />;
    } else {
      return (
        <ActionsTable
          entities={this.state.users}
          tableName={'Users'}
          tableHead={['', 'Name', 'Email', 'Client', 'Project', 'Role']}
          tableData={this.state.users.map(user => [
            user.image !== null ? (
              <div className='card-avatar'>
                <img
                  className='img user-avatar'
                  src={user.image}
                  alt={user.name}
                />
              </div>
            ) : (
              <div className='card-avatar'>
                <img
                  className='img user-avatar'
                  src={nullAvatar}
                  alt={user.name}
                />
              </div>
            ),
            <Link to={`/users/${user.id}`} className='text-info'>
              {user.name}
            </Link>,
            user.email,
            user.client_id
              ? findInArray(this.state.clients, 'id', user.client_id, 'name')
              : null,
            user.project_id
              ? findInArray(this.state.projects, 'id', user.project_id, 'title')
              : null,
            user.role_id
              ? findInArray(this.state.roles, 'id', user.role_id, 'name')
              : null,
          ])}
          tableColor={'success'}
          deleteOnClick={this.deleteOnClick}
          confirmationFieldName={'name'}
        />
      );
    }
  }
}
