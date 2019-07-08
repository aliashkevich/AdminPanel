import React from 'react';

function MemberTab(props) {
  return (
    <div>
      <li className='nav-item'>
        <a className='nav-link' href='#' data-toggle='tab'>
          all
          <div className='ripple-container' />
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='#messages' data-toggle='tab'>
          <i className='material-icons'>code</i> Website
          <div className='ripple-container' />
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='#settings' data-toggle='tab'>
          <i className='material-icons'>cloud</i> Server
          <div className='ripple-container' />
        </a>
      </li>
    </div>
  );
}

function MemberTask(props) {
  return (
    <div className='tab-pane active' id='name1'>
      <table className='table'>
        <tbody>
          {props.projectTasks.map((task, i) => {
            return <TaskRow task={task} key={i} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

function TaskRow(props) {
  return (
    <tr>
      <td>Assignee</td>
      {/* <td>
        {props.task.startDate.slice(2, 10)} ~ {props.task.endDate.slice(2, 10)}
      </td> */}
      <td>{props.task.summary}</td>
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
      users: {},
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
      .catch(error => console.log(error))
      .then(
        fetch(`${this.props.url}/users`)
          .then(res => res.json())
          .then(data => {
            this.setState({
              users: data.users,
              loading: false,
            });
          })
          .catch(error => console.log(error)),
      );
  }

  componentDidMount() {
    this.getTasks();
  }

  render() {
    const {projectId} = this.props;
    const tasks = this.state.tasks;
    const users = this.state.users;

    if (this.state.loading === false) {
      const projectTasks = tasks.filter(task => task.projectId === projectId);
      return (
        <div className='col-lg-8 col-md-12 col-sm-12'>
          <div className='card'>
            <div className='card-header card-header-tabs card-header-info'>
              <div className='nav-tabs-navigation'>
                <div className='nav-tabs-wrapper'>
                  <span className='nav-tabs-title'>Tasks:</span>
                  <ul className='nav nav-tabs' data-tabs='tabs'>
                    {/* <MemberTab /> */}
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
