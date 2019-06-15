import React from 'react';
import {Link} from 'react-router-dom';
import Select from 'react-select';

const styles = {
  dates: {
    marginTop: '15px',
  },
  participants: {
    marginBottom: '20px',
  },
  control: {
    control: (base, state) => ({
      ...base,
      borderColor: 'lightgrey',
      boxShadow: `0 0 0 1px 'orange'`,
      '&:hover': {
        borderColor: 'orange',
        boxShadow: `0 0 5 10px 'orange'`,
      },
    }),
  },
};

class AddNewProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: {
        id: '',
        client_id: '',
        title: '',
        Summary: '',
        start_date: '',
        end_date: '',
        participants: [],
      },
      participantOptions: [
        {value: '1', label: '1'},
        {value: '2', label: '2'},
        {value: '3', label: '3'},
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleMultiChange = this.handleMultiChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleMultiChange(option) {
    this.setState({
      participants: option,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('/auth/signup', {
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
      email: '',
      name: '',
      lastname: '',
      password: '',
      passwordbis: '',
      flash: '',
      open: true,
    });
  }

  componentDidMount() {
    fetch('https://lesewert.herokuapp.com/api/v1/projects')
      .then(res => res.json())
      .then(data => {
        this.setState({
          projects: data.projects,
        });
        console.log(this.state);
      })
      .catch(error => console.log(error));
  }

  render() {
    console.log(this.state);
    return (
      <div className='main-panel'>
        <div className='content'>
          <div className='container-fluid'>
            <div className='col-md-12'>
              <div className='card'>
                <div className='card-header card-header-warning'>
                  <h4 className='card-title'>New Project</h4>
                </div>
                <br />
                <div className='card-body'>
                  <form>
                    <div className='form-row'>
                      <div className='form-group col-sm-12 col-md-6 has-warning'>
                        <label for='inputTitle'>Title</label>
                        <input
                          type='text'
                          name='title'
                          className='form-control'
                          id='inputTitle'
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className='form-group col-sm-12 col-md-2 has-warning'>
                        <label for='inputIDN'>IDN</label>
                        <input
                          type='number'
                          name='id'
                          className='form-control'
                          id='inputIDN'
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className='form-group col-sm-12 col-md-4 has-warning'>
                        <label for='inputClient'>Client</label>
                        <input
                          type='text'
                          name='client_id'
                          className='form-control'
                          id='inputClient'
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <br />
                    <div className='form-row'>
                      <div className='form-group col-sm-12 col-md-12 has-warning'>
                        <label for='inputSummary'>Summary</label>
                        <input
                          type='text'
                          name='Summary'
                          className='form-control'
                          id='inputSummary'
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <br />
                    <div className='form-row'>
                      <div
                        className='form-group col-sm-12 col-md-3 has-warning'
                        style={styles.dates}>
                        <label for='inputStartDate'>Start Date</label>
                        <input
                          type='text'
                          name='start_date'
                          className='form-control'
                          id='inputStartDate'
                          onChange={this.handleChange}
                        />
                      </div>
                      <div
                        className='form-group col-sm-12 col-md-3 has-warning'
                        style={styles.dates}>
                        <label for='inputEndDate'>Start End</label>
                        <input
                          type='text'
                          name='end_date'
                          className='form-control'
                          id='inputEndDate'
                          onChange={this.handleChange}
                        />
                      </div>
                      <div
                        className='col-sm-12 col-md-6 has-warning'
                        style={styles.participants}>
                        <label for='inputParticipants' className='text-warning'>
                          Participants
                        </label>
                        <Select
                          id='inputParticipants'
                          name='participants'
                          placeholder='Select...'
                          value={this.state.participants}
                          options={this.state.participantOptions}
                          onChange={this.handleMultiChange}
                          isMulti
                          styles={styles.control}
                        />
                      </div>
                    </div>
                    <div className='text-right'>
                      <Link to='/projects'>
                        <button
                          type='submit'
                          className='btn btn-warning'
                          onSubmit={this.handleSubmit}>
                          Add
                        </button>
                      </Link>
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
