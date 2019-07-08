import React from 'react';

function TaskTable(props) {
  return (
    <div className='tab-pane active'>
      <table className='table'>
        <thead className='text-info'>
          <tr>
            <th>Assignee</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {props.projectTasks.map((task, i) => {
            props.users.find(user => user.id === task.userId);
            return <TaskRow task={task} users={props.users} key={i} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

function TaskRow(props) {
  return (
    <tr>
      <td>{props.users.find(user => user.id === props.task.userId).name}</td>
      <td>{props.task.summary}</td>
      <td>{props.task.status}</td>
    </tr>
  );
}

export default class ProjectTasks extends React.Component {
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
            <div className='card-header card-header-info'>
              <h4 className='card-title'>Tasks</h4>
            </div>
            <div className='card-body'>
              <div className='tab-content'>
                <TaskTable projectTasks={projectTasks} users={users} />
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
