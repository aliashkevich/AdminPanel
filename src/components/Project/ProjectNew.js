import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import Select from 'react-select';
import '../global/Form.css';
import Spinner from '../global/Spinner';
import {config} from '../../util/config.js';

const styles = {
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

class ProjectNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      clients: [],
      clientSelect: [],
      clientId: '',
      title: '',
      summary: '',
      startDate: '',
      endDate: '',
      participants: [],
      participantSelect: [],
      participantId: [],
      edit: false,
      projects: [],
      loading: true,
      participantFlag: false,
      clientFlag: false,
      projectFlag: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClientChange = this.handleClientChange.bind(this);
    this.handleParticipantChange = this.handleParticipantChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.getProject = this.getProject.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.getClients = this.getClients.bind(this);
  }

  componentDidMount() {
    this.getUsers();
    this.getClients();
    this.getProject();
  }
  getUsers() {
    fetch(`${config.apiUrl}/users`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          participants: data.users,
          participantFlag: true,
        });
      })
      .catch(error => console.log(error));
  }

  getClients() {
    fetch(`${config.apiUrl}/clients`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          clients: data.clients,
          clientFlag: true,
        });
      })
      .catch(error => console.log(error));
  }

  getProject() {
    if (this.props.location.pathname.split('/').pop() !== 'new') {
      fetch(
        `${config.apiUrl}/projects/${this.props.location.pathname
          .split('/')
          .pop()}`,
      )
        .then(res => res.json())
        .then(data => {
          this.setState({
            id: data.project.id,
            title: data.project.title,
            summary: data.project.summary,
            startDate: data.project.startDate.slice(0, 10),
            endDate: data.project.endDate.slice(0, 10),
            clientId: data.project.clientId,
            participantId: data.project.participants,
            projects: data.project,
            projectFlag: true,
            edit: true,
          });
        })
        .catch(error => console.log(error));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.clientFlag !== this.state.clientFlag ||
      prevState.projectFlag !== this.state.projectFlag ||
      prevState.participantFlag !== this.state.participantFlag
    ) {
      let clientOptions = this.state.clients.map(client => {
        return {value: client.id, label: client.name};
      });
      let clientSelect = clientOptions.find(
        c => c.value === this.state.clientId,
      );
      let participantOptions = this.state.participants.map(participant => {
        return {value: participant.id, label: participant.name};
      });
      const participantId = this.state.participantId;
      const participantSelect = participantOptions.filter(currentObj => {
        return participantId.includes(currentObj.value);
      });
      this.setState({
        clientSelect,
        participantSelect,
        loading: false,
      });
    }
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

  handleSubmit(e) {
    e.preventDefault();
    const newClient = this.state.clientSelect.value;
    const newParticipants = this.state.participantSelect.map(participant => {
      return participant.value;
    });
    const body = {
      clientId: newClient,
      title: this.state.title,
      summary: this.state.summary,
      startDate: new Date(this.state.startDate).toISOString(),
      endDate: new Date(this.state.endDate).toISOString(),
      participants: newParticipants,
    };
    fetch(`${config.apiUrl}/projects`, {
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
      clientSelect: [],
      title: '',
      summary: '',
      startDate: '',
      endDate: '',
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
      clientId: newClient,
      title: this.state.title,
      summary: this.state.summary,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      participants: newParticipants,
    };
    fetch(`${config.apiUrl}/projects/${this.state.projects.id}`, {
      method: 'PUT',
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
      clientSelect: [],
      title: '',
      summary: '',
      startDate: '',
      endDate: '',
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
                    {this.state.edit ? 'Edit Project' : 'New Project'}
                  </h4>
                </div>
                <div className='card-body'>
                  <br />
                  <form
                    onSubmit={
                      this.state.edit ? this.handleEdit : this.handleSubmit
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
                          name='startDate'
                          className='form-control'
                          id='inputStartDate'
                          onChange={this.handleChange}
                          value={this.state.startDate.slice(0, 10)}
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
                          name='endDate'
                          className='form-control'
                          id='inputEndDate'
                          onChange={this.handleChange}
                          value={this.state.endDate.slice(0, 10)}
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
                          {this.state.edit ? 'Save' : 'Add'}
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

export default withRouter(ProjectNew);
