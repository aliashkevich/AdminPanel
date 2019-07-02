import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import Select from 'react-select';
import '../global/Form.css';

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

class AddNewProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      clientSelect: [],
      title: '',
      summary: '',
      start_date: '',
      end_date: '',
      participants: [],
      participantSelect: [],
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
          participants: data.users,
        }),
      )
      .catch(error => console.log(error))
      .then(
        fetch('https://lesewert.herokuapp.com/api/v1/clients')
          .then(res => res.json())
          .then(data =>
            this.setState({
              clients: data.clients,
            }),
          )
          .catch(error => console.log(error)),
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
      clientSelect: [],
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
    return (
      <div className='container-fluid'>
        <div className='card'>
          <div className='card-header card-header-info'>
            <h4 className='card-title'>New Project</h4>
          </div>
          <div className='card-body'>
            <br />
            <form onSubmit={this.handleSubmit}>
              <div className='form-row'>
                <div className='form-group col-sm-12 col-md-6 has-info input-group'>
                  <label for='inputTitle'>Title:</label>
                  <input
                    type='text'
                    name='title'
                    className='form-control inner-form'
                    id='inputTitle'
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className='col-sm-12 col-md-6 has-info clients'>
                  <label for='inputClient' className='text-info'>
                    Client:
                  </label>
                  <Select
                    id='inputClient'
                    name='clientSelect'
                    value={this.state.clientSelect}
                    options={clientOptions}
                    onChange={this.handleClientChange}
                    className='select'
                    theme={styles.select.theme}
                    required
                  />
                </div>
              </div>
              <div className='form-row'>
                <div className='form-group col-sm-12 col-md-3 has-info input-group'>
                  <label for='inputStartDate'>Start Date:</label>
                  <input
                    type='date'
                    name='start_date'
                    className='form-control inner-form'
                    id='inputStartDate'
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className='form-group col-sm-12 col-md-3 has-info input-group'>
                  <label for='inputEndDate'>End Date:</label>
                  <input
                    type='date'
                    name='end_date'
                    className='form-control inner-form'
                    id='inputEndDate'
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className='col-sm-12 col-md-6 has-info participants'>
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
                    className='select'
                    theme={styles.select.theme}
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
                  <button type='submit' className='btn btn-success btn-right'>
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddNewProject);
