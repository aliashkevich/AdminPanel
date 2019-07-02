import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import Select from 'react-select';
import Spinner from '../global/Spinner';

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
        primary: '#1fbfd7',
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
      clients: [],
      clientSelect: undefined,
      title: '',
      summary: '',
      start_date: '',
      end_date: '',
      participants: [],
      participantSelect: [],
      project: [],
      loading: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClientChange = this.handleClientChange.bind(this);
    this.handleParticipantChange = this.handleParticipantChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.getProject = this.getProject.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.getClients = this.getClients.bind(this);
    this.prefillProject = this.prefillProject.bind(this);
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
          participants: data.users,
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

  searchName = (nameKey, myArray) => {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].id === nameKey) {
        return myArray[i].name;
      }
    }
  };

  fillParticipants = () => {
    let selectLabel = this.state.project.participants.map(participant => {
      this.searchName(participant, this.state.participants);
    });

    this.setState(() => {
      return {
        participantSelect: this.state.project.participants.map(participant => {
          return {
            value: participant,
            label: selectLabel,
          };
        }),
      };
    });
  };

  prefillProject() {
    const clientSelectPrefill = this.searchName(
      this.state.project.client_id,
      this.state.clients,
    );

    if (this.props.edit) {
      this.setState(state => {
        return {
          client_id: state.project.client_id,
          clientSelect: {
            value: state.project.client_id,
            label: clientSelectPrefill,
          },
          title: state.project.title,
          summary: state.project.summary,
          start_date: state.project.start_date,
          end_date: state.project.end_date,

          loading: false,
        };
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
    this.getProject();
    this.getUsers();
    this.getClients();
  }

  handleSubmit(e) {
    e.preventDefault();
    const newClient = this.state.clientSelect.value;
    const newParticipants = this.state.participantSelect.map(participant => {
      return participant.value;
    });
    const body = {
      client_id: newClient,
      title: this.state.title,
      summary: this.state.summary,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      participants: newParticipants,
    };
    fetch('https://lesewert.herokuapp.com/api/v1/projects', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(body),
    })
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
      clients: [],
      clientSelect: undefined,
      title: '',
      summary: '',
      start_date: '',
      end_date: '',
      participants: [],
      participantSelect: [],
    });
  }

  handleEdit(e) {
    e.preventDefault();
    const newClient = this.state.clientSelect.value;
    const newParticipants = this.state.participantSelect.map(participant => {
      return participant.value;
    });
    const body = {
      client_id: newClient,
      title: this.state.title,
      summary: this.state.summary,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      participants: newParticipants,
    };
    fetch(
      `https://lesewert.herokuapp.com/api/v1/projects/${this.state.project.id}`,
      {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(body),
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
      clients: [],
      clientSelect: undefined,
      title: '',
      summary: '',
      start_date: '',
      end_date: '',
      participants: [],
      participantSelect: [],
    });
  }

  render() {
    let clientOptions = this.state.clients.map(client => {
      return {value: client.id, label: client.name};
    });
    let participantOptions = this.state.participants.map(user => {
      return {value: user.id, label: user.name};
    });

    // let participantSelectCheck = this.state.participantSelect.map(
    //   participant => {
    //     if (!participant.value || !participant.label) {
    //       this.fillParticipants();
    //       console.log(participant.label);
    //       return false;
    //     }
    //     return true;
    //   },
    // );
    return (
      <React.Fragment>
        {this.state.loading ? (
          <Spinner />
        ) : (
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
                  <form
                    onSubmit={
                      this.props.edit ? this.handleEdit : this.handleSubmit
                    }>
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
                        <label
                          htmlFor='inputParticipants'
                          className='text-info'>
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
                        <button
                          type='submit'
                          className='btn btn-success btn-right'>
                          {this.props.edit ? 'Save' : 'Add'}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(AddNewProject);
