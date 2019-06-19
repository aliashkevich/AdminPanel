import React from 'react';
import {Link} from 'react-router-dom';
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
      },
    }),
  },
};

class AddNewProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      client_id: [],
      title: '',
      summary: '',
      start_date: '',
      end_date: '',
      clients: [],
      client: [],
      users: [],
      participants: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCliChange = this.handleCliChange.bind(this);
    this.handleParChange = this.handleParChange.bind(this);
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

  handleCliChange(option) {
    this.setState({
      client: option,
    });
    if (this.state.client.length > 0) {
      this.setState(prevState => ({
        client_id: [
          ...prevState.client_id,
          this.state.client[this.state.client.length - 1].value,
        ],
      }));
    }
  }

  handleParChange(option) {
    this.setState({
      participants: option,
    });
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
      .then(res => res.json())
      .then(
        res => this.setState({flash: res.flash}),
        err => this.setState({flash: err.flash}),
      );
    this.setState({
      id: '',
      client_id: '',
      title: '',
      Summary: '',
      start_date: '',
      end_date: '',
      participants: '',
    });
  }

  render() {
    let cliOptions = this.state.clients.map(client => {
      return {value: client.id, label: client.name};
    });
    let parOptions = this.state.users.map(user => {
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
                  <form>
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
                          name='client'
                          value={this.state.client}
                          options={cliOptions}
                          onChange={this.handleCliChange}
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
                          name='participants'
                          value={this.state.participants}
                          options={parOptions}
                          onChange={this.handleParChange}
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
                        />
                      </div>
                    </div>
                    <div className='form-row'>
                      <div className='form-group col-sm-12 col-md-12 has-info'>
                        <label for='inputSummary'>Summary:</label>
                        <textarea
                          type='text'
                          name='Summary'
                          className='form-control'
                          id='inputSummary'
                          onChange={this.handleChange}
                          rows={10}
                        />
                      </div>
                    </div>

                    <div className='form-row'>
                      <div className=' form-group col-xs-1'>
                        <Link to='/projects'>
                          <button type='button' className='btn btn-danger'>
                            Cancel
                          </button>
                        </Link>
                      </div>
                      <div className='form-group col-xs-1 text-end ml-auto'>
                        <Link to='/projects'>
                          <button
                            type='submit'
                            className='btn btn-success btn-right'
                            onSubmit={this.handleSubmit}>
                            Add
                          </button>
                        </Link>
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

export default AddNewProject;
