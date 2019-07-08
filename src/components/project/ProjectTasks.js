import React from 'react';
import Table from '../global/Table';

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
      const tableData = projectTasks.map(task => [
        users.find(user => user.id === task.userId).name,
        task.summary,
        task.status,
      ]);
      return (
        <div className='col-lg-8 col-md-12 col-sm-12'>
          <Table
            projectTasks={projectTasks}
            users={users}
            tableName={'Tasks'}
            tableHead={['Assignee', 'Title', 'Status']}
            tableData={tableData}
            tableColor={'info'}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}
