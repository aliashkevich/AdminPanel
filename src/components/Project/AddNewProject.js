import React from 'react';
import {Link} from 'react-router-dom';

class AddNewProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      client_id: '',
      title: '',
      Summary: '',
      start_date: '',
      end_date: '',
      participants: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
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
                      <div className='form-group  col-sm-12 col-md-6 has-warning'>
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
                      <div className='form-group col-sm-12 col-md-3 has-warning'>
                        <label for='inputStartDate'>Start Date</label>
                        <input
                          type='text'
                          name='start_date'
                          className='form-control'
                          id='inputStartDate'
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className='form-group col-sm-12 col-md-3 has-warning'>
                        <label for='inputEndDate'>Start End</label>
                        <input
                          type='text'
                          name='end_date'
                          className='form-control'
                          id='inputEndDate'
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className='form-group col-sm-12 col-md-6 has-warning'>
                        <label for='inputParticipants'>Participants</label>
                        <select
                          multiple
                          className='form-control'
                          data-style='btn btn-link'
                          id='inputParticipants'>
                          <option />
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          {/* onChange={this.handleChange} */}>
                        </select>
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
