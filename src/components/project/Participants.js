import React from 'react';
import CircleImg from '../global/CircleImg';
import {config} from '../../util/config.js';
import {authHeader} from '../../util/authHeader.js';

export default class Participants extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {},
      loading: true,
    };
    this.getUsers = this.getUsers.bind(this);
  }
  getUsers() {
    fetch(`${config.apiUrl}/users`, {
      headers: authHeader,
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
    const {participantsArr} = this.props;
    const users = this.state.users;

    const participants = [];
    if (this.state.loading === false) {
      users.map(user => {
        participantsArr.find(id => {
          if (id === user.id) return participants.push(user);
        });
      });
    }
    return (
      <div className='card'>
        <div className='card-header card-header-info card-header-text'>
          <div className='card-text'>
            <h4 className='card-title'>Participants</h4>
          </div>
          <div className='card-body'>
            <hr />
            {participants.map((participant, i) => {
              return (
                <div key={i}>
                  <div className='participant-wrapper'>
                    <span className='font-grey ml-1'>{participant.name}</span>
                    <CircleImg logo={participant.image} />
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
