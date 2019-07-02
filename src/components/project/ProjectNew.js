import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import Select from 'react-select';

const styles = {
  dates: {
    marginTop: '15px',
  },
  margin: {
    marginTop: '17px',
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
  select: {
    theme: theme => ({
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors,
        primary25: '#1fbfd7',
        primary: 'black',
      },
    }),
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

class AddNewProject extends Component {
  static defaultProps = {
    url: 'https://lesewert.herokuapp.com/api/v1',
  };

  constructor(props) {
    super(props);
    this.state = {
      client_id: '',
      title: '',
      summary: '',
      start_date: '',
      end_date: '',
      participants: [],
      clients: [],
      users: [],
      project: [],
      updated: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClientChange = this.handleClientChange.bind(this);
    this.handleParticipantChange = this.handleParticipantChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getProject = this.getProject.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.getClients = this.getClients.bind(this);
    this.prefillProject = this.prefillProject.bind(this);
    this.searchName = this.searchName.bind(this);
  }

  getProject() {
    fetch(
      `${this.props.url}/projects/${this.props.location.pathname
        .split('/')
        .pop()}`,
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          project: data.project,
        });
      })
      .then(() => this.prefillProject())
      .catch(error => console.log(error));
  }

  getUsers() {
    fetch(`${this.props.url}/users`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          users: data.users,
        });
      })
      .catch(error => console.log(error));
  }

  getClients() {
    fetch(`${this.props.url}/clients`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          clients: data.clients,
        });
      })
      .catch(error => console.log(error));
  }

  searchName(nameKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].id === nameKey) {
        return myArray[i].name;
      }
    }
  }

  prefillProject() {
    const clientSelectPrefill = this.searchName(
      this.state.project.client_id,
      this.state.clients,
    );
    console.log(this.state.project.client_id, this.state.clients);
    if (this.props.edit) {
      this.setState({
        client_id: this.state.project.client_id,
        clientSelect: {
          value: this.state.project.client_id,
          label: clientSelectPrefill,
        },
        title: this.state.project.title,
        summary: this.state.project.summary,
        start_date: this.state.project.start_date,
        end_date: this.state.project.end_date,
        participants: this.state.project.participants,
        participantSelect: this.state.project.participants.map(participant => {
          return {
            value: participant,

            label: this.searchName(participant, this.state.users),
          };
        }),
      });
    }
  }

  // TODO: fix bug that participant array is not unique

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

  componentDidMount() {
    this.getUsers();
    this.getClients();
    this.getProject();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.clientSelect !== this.state.clientSelect) {
      this.setState({
        client_id: this.state.clientSelect.value,
      });
      // here we shouldnt only check if its different but whether that participant has not been added to to participants already
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
    fetch('https://lesewert.herokuapp.com/api/v1/projects', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(this.state),
    })
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          this.props.history.push('/projects');
          return res;
        } else {
          alert('Sorry - something went wrong.');
        }
      })
      .catch(err => err)
      .catch(error => console.log(error));
    this.setState({
      client_id: '',
      title: '',
      summary: '',
      start_date: '',
      end_date: '',
      participants: '',
    });
  }

  handleEdit(e) {
    e.preventDefault();
    fetch(
      'https://lesewert.herokuapp.com/api/v1/projects/${this.state.project.id}',
      {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(this.state),
      },
    )
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          this.props.history.push('/projects');
          return res;
        } else {
          alert('Sorry - something went wrong.');
        }
      })
      .catch(error => console.log(error));
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
    return (
      <div className='container-fluid'>
        <div className='col-md-12'>
          <div className='card'>
            <div className='card-header card-header-info'>
              <h4 className='card-title'>
                {this.props.edit ? 'Edit Project' : 'New Project'}
              </h4>
            </div>
            <div className='card-body'>
              <br />
              <form onSubmit={this.handleSubmit}>
                <div className='form-row'>
                  <div
                    className='form-group col-sm-12 col-md-6 has-info'
                    style={styles.dates}>
                    <label htmlFor='inputTitle'>Title:</label>
                    <input
                      style={styles.margin}
                      type='text'
                      name='title'
                      className='form-control'
                      id='inputTitle'
                      onChange={this.handleChange}
                      value={this.state.title}
                      required
                    />
                  </div>
                  <div
                    className='col-sm-12 col-md-6 has-info'
                    style={styles.clients}>
                    <label htmlFor='inputClient' className='text-info'>
                      Client:
                    </label>
                    <Select
                      id='inputClient'
                      name='clientSelect'
                      value={this.state.clientSelect}
                      options={clientOptions}
                      onChange={this.handleClientChange}
                      styles={styles.select}
                      theme={styles.select.theme}
                      required
                    />
                  </div>
                </div>
                <div className='form-row'>
                  <div
                    className='form-group col-sm-12 col-md-3 has-info'
                    style={styles.dates}>
                    <label htmlFor='inputStartDate'>Start Date:</label>
                    <input
                      style={styles.margin}
                      type='date'
                      name='start_date'
                      className='form-control'
                      id='inputStartDate'
                      onChange={this.handleChange}
                      value={this.state.start_date.slice(0, 10)}
                      required
                    />
                  </div>
                  <div
                    className='form-group col-sm-12 col-md-3 has-info'
                    style={styles.dates}>
                    <label htmlFor='inputEndDate'>End Date:</label>
                    <input
                      style={styles.margin}
                      type='date'
                      name='end_date'
                      className='form-control'
                      id='inputEndDate'
                      onChange={this.handleChange}
                      value={this.state.end_date.slice(0, 10)}
                      required
                    />
                  </div>
                  <div
                    className='col-sm-12 col-md-6 has-info'
                    style={styles.participants}>
                    <label htmlFor='inputParticipants' className='text-info'>
                      Participants:
                    </label>
                    <Select
                      id='inputParticipants'
                      name='participantSelect'
                      value={this.state.participantSelect}
                      options={participantOptions}
                      onChange={this.handleParticipantChange}
                      isMulti
                      styles={styles.select}
                      theme={styles.select.theme}
                      required
                    />
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-group col-sm-12 col-md-12 has-info'>
                    <label htmlFor='inputSummary'>Summary:</label>
                    <textarea
                      type='text'
                      name='summary'
                      className='form-control'
                      id='inputSummary'
                      onChange={this.handleChange}
                      rows={10}
                      value={this.state.summary}
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
                    <button type='submit' className='btn btn-success btn-right'>
                      {this.props.edit ? 'Save' : 'Add'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddNewProject);
