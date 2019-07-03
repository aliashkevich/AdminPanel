import React from 'react';
import CircleImg from './CircleImg';

export default class Participants extends React.Component {
  static defaultProps = {
    url: 'https://lesewert.herokuapp.com/api/v1',
  };

  constructor(props) {
    super(props);

    this.state = {
      users: {},
      loading: true,
    };
    this.getUsers = this.getUsers.bind(this);
  }
  getUsers() {
    fetch(`${this.props.url}/users`)
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
    if (this.state.loading == false) {
      users.map(user => {
        participantsArr.find((id, i) => {
          if (id === user.id) return participants.push(user);
        });
      });
      console.log('participants: ', participants);
    }
    return (
      <div className='col-lg-4 col-md-12 col-sm-12'>
        <div className='card card-stats'>
          <div className='card-header card-header-info card-header-icon'>
            <div className='card-icon'>
              <i className='material-icons'>people</i>
            </div>
            <div className='container-fluid' style={{padding: '10px'}}>
              <p className='card-category' style={{paddingBottom: '5px'}}>
                participants
              </p>
              {/* <div className='row'> */}
              {participants.map(participant => {
                return <CircleImg logo={participant.image} />;
              })}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
