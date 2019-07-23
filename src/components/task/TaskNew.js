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

class AddNewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      projectSelect: {},
      projectId: '',
      taskId: '',
      title: '',
      summary: '',
      description: '',
      startDate: '',
      endDate: '',
      estimation: '',
      assignee: [],
      assigneeSelect: {},
      assigneeId: '',
      edit: false,
      loading: true,
      taskFlag: false,
      assigneeFlag: false,
      projectFlag: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleProjectChange = this.handleProjectChange.bind(this);
    this.handleAssigneeChange = this.handleAssigneeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUsers = () => {
    fetch(`${config.apiUrl}/users`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          assignee: data.users,
          assigneeFlag: true,
        });
      })
      .catch(error => console.log(error));
  };

  getProjects = () => {
    fetch(`${config.apiUrl}/projects`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          projects: data.projects,
          projectFlag: true,
        }),
      )
      .catch(error => console.log(error));
  };

  getTask = () => {
    let lastParam = this.props.location.pathname.split('/').pop();
    if (lastParam !== 'new') {
      fetch(`${config.apiUrl}/tasks/${lastParam}`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            taskId: data.task.id,
            projectId: data.task.projectId,
            title: data.task.title,
            summary: data.task.summary,
            description: data.task.description,
            startDate: data.task.startDate,
            endDate: data.task.endDate,
            estimation: data.task.estimation,
            assigneeId: data.task.userId,
            taskFlag: true,
            edit: true,
          });
        })
        .catch(error => console.log(error));
    }
  };

  componentDidMount() {
    this.getTask();
    this.getUsers();
    this.getProjects();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.assigneeFlag !== this.state.assigneeFlag ||
      prevState.projectFlag !== this.state.projectFlag ||
      prevState.taskFlag !== this.state.taskFlag
    ) {
      let projectOptions = this.state.projects.map(project => {
        return {value: project.id, label: project.title};
      });
      let projectSelect = projectOptions.find(
        c => c.value === this.state.projectId,
      );
      let assigneeOptions = this.state.assignee.map(assignee => {
        return {value: assignee.id, label: assignee.name};
      });
      const assigneeId = this.state.assigneeId;
      const assigneeSelect = assigneeOptions.filter(currentObj => {
        return assigneeId == currentObj.value;
      })[0];
      this.setState({
        projectSelect,
        assigneeSelect,
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

  handleProjectChange(option) {
    this.setState({
      projectSelect: option,
    });
  }

  handleAssigneeChange(option) {
    this.setState({
      assigneeSelect: option,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newProject = this.state.projectSelect.value;
    const newAssignee = this.state.assigneeSelect.value;
    const body = {
      projectId: newProject,
      title: this.state.title,
      summary: this.state.summary,
      description: this.state.description,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      estimation: this.state.estimation,
      userId: newAssignee,
      status: 'new',
    };
    fetch(`${config.apiUrl}/tasks`, {
      method: 'POST',
      headers: new Headers({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(body),
    })
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          this.props.history.push('/tasks');
          return res;
        } else {
          alert('Sorry - something went wrong.');
        }
      })
      .catch(error => console.log(error));
    this.setState({
      projects: [],
      projectSelect: {},
      title: '',
      summary: '',
      description: '',
      startDate: '',
      endDate: '',
      estimation: '',
      assignee: [],
      assigneeSelect: {},
    });
  }

  handleEdit = e => {
    e.preventDefault();
    const newProject = this.state.projectSelect.value;
    const newAssignee = this.state.assigneeSelect.value;
    const body = {
      projectId: newProject,
      title: this.state.title,
      summary: this.state.summary,
      description: this.state.description,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      estimation: this.state.estimation,
      userId: newAssignee,
      status: 'new',
    };
    fetch(`${config.apiUrl}/tasks/${this.state.taskId}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(body),
    })
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          this.props.history.push('/tasks');
          return res;
        } else {
          alert('Sorry - something went wrong.');
        }
      })
      .catch(error => console.log(error));
    this.setState({
      projects: [],
      projectSelect: {},
      title: '',
      summary: '',
      description: '',
      startDate: '',
      endDate: '',
      estimation: '',
      assignee: [],
      assigneeSelect: {},
    });
  };
  render() {
    let projectOptions = this.state.projects.map(project => {
      return {value: project.id, label: project.title};
    });
    let assigneeOptions = this.state.assignee.map(user => {
      return {value: user.id, label: user.name};
    });
    return (
      <React.Fragment>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div className='container-fluid'>
            <div className='card'>
              <div className='card-header card-header-rose'>
                <h4 className='card-title'>
                  {' '}
                  {this.state.edit ? 'Edit Task' : 'New Task'}
                </h4>
              </div>
              <div className='card-body'>
                <br />
                <form
                  onSubmit={
                    this.state.edit ? this.handleEdit : this.handleSubmit
                  }>
                  <div className='form-row'>
                    <div className='form-group col-sm-12 col-md-6 has-info input-group'>
                      <label htmlFor='inputTitle'>Title:</label>
                      <input
                        type='text'
                        name='title'
                        className='form-control inner-form'
                        id='inputTitle'
                        onChange={this.handleChange}
                        value={this.state.title}
                        required
                      />
                    </div>
                    <div className='col-sm-12 col-md-6 has-info projects'>
                      <label htmlFor='inputClient' className='text-info'>
                        Project:
                      </label>
                      <Select
                        id='inputClient'
                        name='projectSelect'
                        value={this.state.projectSelect}
                        options={projectOptions}
                        onChange={this.handleProjectChange}
                        className='select'
                        theme={styles.select.theme}
                        required
                      />
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='form-group col-sm-12 col-md-2 col-lg-2 has-info input-group'>
                      <label htmlFor='inputStartDate'>Start Date:</label>
                      <input
                        type='date'
                        name='startDate'
                        className='form-control inner-form'
                        id='inputStartDate'
                        onChange={this.handleChange}
                        value={this.state.startDate.slice(0, 10)}
                        required
                      />
                    </div>
                    <div className='form-group col-sm-12 col-md-2 col-lg-2 has-info input-group'>
                      <label htmlFor='inputEndDate'>End Date:</label>
                      <input
                        type='date'
                        name='endDate'
                        className='form-control inner-form'
                        id='inputEndDate'
                        onChange={this.handleChange}
                        value={this.state.endDate.slice(0, 10)}
                        required
                      />
                    </div>
                    <div className='form-group col-sm-5 col-md-2 col-lg-2 has-info input-group'>
                      <label htmlFor='inputEstimation'>
                        Estimation: (hours)
                      </label>
                      <textarea
                        type='text'
                        name='estimation'
                        className='form-control'
                        id='inputEstimation'
                        onChange={this.handleChange}
                        rows={1}
                        placeholder='hours'
                        value={this.state.estimation}
                        required
                      />
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6 has-info projects'>
                      <label htmlFor='inputClient' className='text-info'>
                        Assignee:
                      </label>
                      <Select
                        id='inputClient'
                        name='projectSelect'
                        value={this.state.assigneeSelect}
                        options={assigneeOptions}
                        onChange={this.handleAssigneeChange}
                        className='select'
                        theme={styles.select.theme}
                        required
                      />
                    </div>
                  </div>
                  <div className='form-group col-sm-12 col-md-12 has-info'>
                    <label htmlFor='inputSummary'>Summary:</label>
                    <textarea
                      type='text'
                      name='summary'
                      className='form-control'
                      id='inputSummary'
                      onChange={this.handleChange}
                      value={this.state.summary}
                      rows={10}
                      required
                    />
                  </div>
                  <div className='form-group col-sm-12 col-md-12 has-info'>
                    <label htmlFor='inputSummary'>Description:</label>
                    <textarea
                      type='text'
                      name='description'
                      className='form-control'
                      id='inputSummary'
                      onChange={this.handleChange}
                      value={this.state.description}
                      rows={10}
                      required
                    />
                  </div>
                  <div className='form-row'>
                    <div className=' form-group col-xs-1'>
                      <Link to='/tasks'>
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
        )}
        ;
      </React.Fragment>
    );
  }
}

export default withRouter(AddNewTask);
