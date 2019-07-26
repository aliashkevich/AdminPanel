import React from 'react';
import {config} from '../../util/config.js';
import Spinner from '../global/Spinner';
import {getLocalDateFromUTC} from '../../util/date';
import CircleImg from '../global/CircleImg';

class TaskInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: true,
    };
    this.getUsers = this.getUsers.bind(this);
  }

  getUsers() {
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
          loading: false,
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const user = this.state.users.find(user => user.id === this.props.userId);
    return (
      <React.Fragment>
        {this.state.loading ? (
          <Spinner spinnerPosition={'global-spinner'} />
        ) : (
          <div className='card'>
            <div className='card-header card-header-text card-header-rose'>
              <div className='card-text'>
                <h4 className='card-title'>
                  Status: <b>{this.props.task.status}</b>
                </h4>
              </div>
            </div>
            <div className='card-body'>
              <p>
                <b>Estimation:</b> {this.props.task.estimation} hours
              </p>
              <hr />
              <p>
                <b>Start Date:</b>{' '}
                {getLocalDateFromUTC(this.props.task.startDate)}
              </p>
              <hr />
              <p>
                <b>End Date:</b> {getLocalDateFromUTC(this.props.task.endDate)}
              </p>
              <hr />
              <div className='task-participants'>
                {user ? (
                  <React.Fragment>
                    <div>
                      <b>Participant:</b> {user.name}
                    </div>
                    <CircleImg logo={user.image} />
                  </React.Fragment>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default TaskInfo;
