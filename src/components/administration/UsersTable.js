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
      updated: false,
      loading: true,
    };
    this.getUsers = this.getUsers.bind(this);
    this.deleteOnClick = this.deleteOnClick.bind(this);
    this.updateOnClick = this.updateOnClick.bind(this);
  }

  getUsers() {
    fetch(`${this.props.url}/users`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          users: data.users,
          updated: false,
          loading: false,
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getUsers();
  }

  deleteOnClick(task) {
    const options = {
      method: 'DELETE',
    };
    fetch(`${this.props.url}/tasks/${task.id}`, options)
      .then(this.setState({updated: true}))
      .catch(error => console.log(error));
  }

  updateOnClick(user) {
    const data = {status: 'done'};
    const options = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch(`${this.props.url}/users/${user.id}`, options)
      .then(this.setState({updated: true}))
      .catch(error => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.updated !== prevState.updated) {
      this.getUsers();
    }
  }

  render() {
    const tableData = this.state.users.map(user => [
      user.image !== null ? (
        <div className='card-avatar'>
          <img className='img user-avatar' src={user.image} />
        </div>
      ) : (
        <div className='card-avatar'>
          <img className='img user-avatar' src={nullAvatar} />
        </div>
      ),
      <Link to={`/users/${user.id}`} className='text-info'>
        {user.name}
      </Link>,
      user.email,
      user.client_id,
      user.project_id,
      user.role_id,
    ]);

    return (
      <React.Fragment>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <ActionsTable
            entities={this.state.users}
            tableName={'Users'}
            tableHead={['', 'Name', 'Email', 'Client', 'Project', 'Role']}
            tableData={tableData}
            tableColor={'success'}
            deleteOnClick={this.deleteOnClick}
            confirmationFieldName={'name'}
          />
        )}
      </React.Fragment>
    );
  }
}
