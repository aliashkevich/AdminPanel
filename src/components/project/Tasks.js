import React from 'react';

function MemberTab(props) {
  return (
    <li className='nav-item'>
      <a className='nav-link' href='#name1' data-toggle='tab'>
        participant name
        <div className='ripple-container' />
      </a>
    </li>
  );
}

function MemberTask(props) {
  return (
    <div className='tab-pane active' id='name1'>
      <table className='table'>
        <tbody>
          {props.projectTasks.map(task => {
            return <TaskRow task={task} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

function TaskRow(props) {
  return (
    <tr>
      <td>
        <div className='form-check'>
          <label className='form-check-label'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              checked
            />
            <span className='form-check-sign'>
              <span className='check' />
            </span>
          </label>
        </div>
      </td>
      <td>{props.task.summary}</td>
      <td className='td-actions text-right'>
        <button
          type='button'
          rel='tooltip'
          title='Edit Task'
          className='btn btn-primary btn-link btn-sm'>
          <i className='material-icons'>edit</i>
        </button>
        <button
          type='button'
          rel='tooltip'
          title='Remove'
          className='btn btn-danger btn-link btn-sm'>
          <i className='material-icons'>close</i>
        </button>
      </td>
    </tr>
  );
}

export default class Tasks extends React.Component {
  static defaultProps = {
    url: 'https://lesewert.herokuapp.com/api/v1',
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      tasks: {},
    };
    this.getTasks = this.getTasks.bind(this);
  }
  getTasks() {
    fetch(`${this.props.url}/tasks`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          tasks: data.tasks,
          loading: false,
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getTasks();
  }

  render() {
    const {projectId} = this.props;
    const tasks = this.state.tasks;
    if (this.state.loading === false) {
      const projectTasks = tasks.filter(task => task.project_id === projectId);
      return (
        <div className='col-lg-8 col-md-12 col-sm-12'>
          <div className='card'>
            <div className='card-header card-header-tabs card-header-info'>
              <div className='nav-tabs-navigation'>
                <div className='nav-tabs-wrapper'>
                  <span className='nav-tabs-title'>Tasks:</span>
                  <ul className='nav nav-tabs' data-tabs='tabs'>
                    <MemberTab />
                  </ul>
                </div>
              </div>
            </div>
            <div className='card-body'>
              <div className='tab-content'>
                <MemberTask projectTasks={projectTasks} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
