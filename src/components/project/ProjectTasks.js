import React from 'react';
import Table from '../global/Table';
import {config} from '../../util/config.js';
import Spinner from '../global/Spinner';
import CircleImg from '../global/CircleImg';

export default class ProjectTasks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      tasks: [],
      users: [],
    };
    this.getTasks = this.getTasks.bind(this);
  }

  getTasks() {
    fetch(`${config.apiUrl}/tasks`, {
      headers: new Headers({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      }),
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          tasks: data.tasks,
        });
      })
      .catch(error => console.log(error))
      .then(
        fetch(`${config.apiUrl}/users`, {
          headers: new Headers({
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json',
          }),
        })
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
    function findInArray(array, arrayItemKey, value, arrayItemProperty) {
      var item = array.find(arrayItem => arrayItem[arrayItemKey] === value);
      return item ? item[arrayItemProperty] : '';
    }

    const projectTasks = this.state.tasks.filter(
      task => task.projectId === this.props.projectId,
    );

    const tableData = projectTasks.map(task => [
      task.title,
      task.status,
      <CircleImg
        logo={
          task.userId
            ? findInArray(this.state.users, 'id', task.userId, 'image')
            : null
        }
      />,
    ]);
    return (
      <React.Fragment>
        {this.state.loading ? (
          <Spinner spinnerPosition={'inline-spinner'} />
        ) : (
          <Table
            tableName={'Tasks'}
            tableHead={['Assignee', 'Title', 'Status']}
            tableData={tableData}
            tableColor={'info'}
          />
        )}
      </React.Fragment>
    );
  }
}
