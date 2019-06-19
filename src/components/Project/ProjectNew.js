import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import Select from 'react-select';

const styles = {
  dates: {
    marginTop: '15px',
  },
  participants: {
    marginBottom: '20px',
    padding: '0px',
  },
  clients: {
    padding: '0px',
    margin: '0px 0px 20px 0px',
  },
  summary: {
    height: '400px !important',
  },
  control: {
    control: (base, state) => ({
      ...base,
      borderColor: 'lightgrey',
      boxShadow: `0 0 0 1px lightgrey`,
      borderRadius: '4px',
      '&:hover': {
        borderColor: '#1fbfd7',
        boxShadow: `1 1 5 10px #1fbfd7`,
        color: 'white',
      },
    }),
  },
};

class AddNewProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientSelect: '',
      client_id: '',
      title: '',
      summary: '',
      start_date: '',
      end_date: '',
      participantSelect: [],
      participants: [],
      clients: [],
      users: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClientChange = this.handleClientChange.bind(this);
    this.handleParticipantChange = this.handleParticipantChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('https://lesewert.herokuapp.com/api/v1/users')
      .then(res => res.json())
      .then(data =>
        this.setState({
          users: data.users,
        }),
      )
      .catch(() => console.log('error'))
      .then(
        fetch('https://lesewert.herokuapp.com/api/v1/clients')
          .then(res => res.json())
          .then(data =>
            this.setState({
              clients: data.clients,
            }),
          )
          .catch(() => console.log('error')),
      );
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleClientChange(option) {
    this.setState({
      clientSelect: option,
    });
  }

  handleParticipantChange(option) {
    this.setState({
      participantSelect: option,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.clientSelect !== this.state.clientSelect) {
      this.setState({
        client_id: this.state.clientSelect.value,
      });
    } else if (prevState.participantSelect !== this.state.participantSelect) {
      this.setState({
        participants: [
          ...this.state.participants,
          this.state.participantSelect[this.state.participantSelect.length - 1]
            .value,
        ],
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('/api/v1/projects', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(this.state),
    })
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          console.log(res);
          this.props.history.push('/projects');
          return res;
        } else {
          console.log('Somthing happened wrong');
        }
      })
      .catch(err => err);
    this.setState({
      client_id: '',
      title: '',
      summary: '',
      start_date: '',
      end_date: '',
      participants: '',
    });
  }

  render() {
    let clientOptions = this.state.clients.map(client => {
      return {value: client.id, label: client.name};
    });
    let participantOptions = this.state.users.map(user => {
      return {value: user.id, label: user.name};
    });
    console.log(this.state);
    return (
      <div className='main-panel'>
        <div className='content'>
          <div className='container-fluid'>
            <div className='col-md-12'>
              <div className='card'>
                <div className='card-header card-header-info'>
                  <h4 className='card-title'>New Project</h4>
                </div>
                <div className='card-body'>
                  <br />
                  <form onSubmit={this.handleSubmit}>
                    <div className='form-row'>
                      <div
                        className='form-group col-sm-12 col-md-6 has-info'
                        style={{marginTop: '15px'}}>
                        <label for='inputTitle'>Title:</label>
                        <input
                          style={{marginTop: '17px'}}
                          type='text'
                          name='title'
                          className='form-control'
                          id='inputTitle'
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                      <div
                        className='col-sm-12 col-md-6 has-info'
                        style={styles.clients}>
                        <label for='inputClient' className='text-info'>
                          Client:
                        </label>
                        <Select
                          id='inputClient'
                          name='clientSelect'
                          value={this.state.clientSelect}
                          options={clientOptions}
                          onChange={this.handleClientChange}
                          styles={styles.control}
                          theme={theme => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                              ...theme.colors,
                              primary25: '#1fbfd7',
                              primary: '#1fbfd7',
                            },
                          })}
                          required
                        />
                      </div>
                    </div>
                    <div className='form-row'>
                      <div
                        className='form-group col-sm-12 col-md-3 has-info'
                        style={styles.dates}>
                        <label for='inputStartDate'>Start Date:</label>
                        <input
                          style={{marginTop: '17px'}}
                          type='date'
                          name='start_date'
                          className='form-control'
                          id='inputStartDate'
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                      <div
                        className='form-group col-sm-12 col-md-3 has-info'
                        style={styles.dates}>
                        <label for='inputEndDate'>Start End:</label>
                        <input
                          style={{marginTop: '17px'}}
                          type='date'
                          name='end_date'
                          className='form-control'
                          id='inputEndDate'
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                      <div
                        className='col-sm-12 col-md-6 has-info'
                        style={styles.participants}>
                        <label for='inputParticipants' className='text-info'>
                          Participants:
                        </label>
                        <Select
                          id='inputParticipants'
                          name='participantSelect'
                          value={this.state.participantSelect}
                          options={participantOptions}
                          onChange={this.handleParticipantChange}
                          isMulti
                          styles={styles.control}
                          theme={theme => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                              ...theme.colors,
                              primary25: '#1fbfd7',
                              primary: 'black',
                            },
                          })}
                          required
                        />
                      </div>
                    </div>
                    <div className='form-row'>
                      <div className='form-group col-sm-12 col-md-12 has-info'>
                        <label for='inputSummary'>Summary:</label>
                        <textarea
                          type='text'
                          name='summary'
                          className='form-control'
                          id='inputSummary'
                          onChange={this.handleChange}
                          rows={10}
                          required
                        />
                      </div>
                    </div>
                    <div className='form-row'>
                      <div className=' form-group col-xs-1'>
                        <Link to='/projects'>
                          <button type='reset' className='btn btn-danger'>
                            Cancel
                          </button>
                        </Link>
                      </div>
                      <div className='form-group col-xs-1 text-end ml-auto'>
                        <button
                          type='submit'
                          className='btn btn-success btn-right'>
                          Add
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddNewProject);
