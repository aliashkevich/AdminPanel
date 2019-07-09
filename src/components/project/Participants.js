import React from 'react';
import CircleImg from './CircleImg';
import {config} from '../../util/config.js';

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
    fetch(`${config.apiUrl}/users`)
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
      <div className='col-lg-4 col-md-12 col-sm-12'>
        <div className='card card-stats'>
          <div className='card-header card-header-info card-header-icon'>
            <div className='card-icon'>
              <i className='material-icons'>people</i>
            </div>
            <div className='container-fluid container-padding'>
              <p className='card-category title-padding'>Participants</p>
              {participants.map((participant, i) => {
                return (
                  <div key={i}>
                    <div>
                      <CircleImg logo={participant.image} />
                      <span className='font-grey ml-1'>{participant.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
