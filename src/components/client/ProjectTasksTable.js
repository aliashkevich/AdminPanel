import React from 'react';
import Table from '../global/Table';
import {config} from '../../util/config.js';
import Spinner from '../global/Spinner';
import {getLocalDateFromUTC} from '../../util/date';

export default class ProjectTasksTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      loadingTasks: true,
      users: [],
      loadingUsers: true,
      projects: [],
    };
    this.getTasks = this.getTasks.bind(this);
    this.getProjects = this.getProjects.bind(this);
  }

  getTasks() {
    fetch(`${config.apiUrl}/tasks`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          tasks: data.tasks,
          loadingTasks: false,
        });
      })
      .catch(error => console.log(error))
      .then(
        fetch(`${config.apiUrl}/users`)
          .then(res => res.json())
          .then(data => {
            this.setState({
              users: data.users,
              updated: false,
              loadingUsers: false,
            });
          })
          .catch(error => console.log(error)),
      );
  }
  getProjects() {
    fetch(`${config.apiUrl}/projects`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          projects: data.projects,
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getTasks();
    this.getProjects();
  }

  render() {
    function findInArray(array, arrayItemKey, value, arrayItemProperty) {
      var item = array.find(arrayItem => arrayItem[arrayItemKey] === value);
      return item ? item[arrayItemProperty] : '';
    }
    let thisClientProjects = this.state.projects.filter(() => {
      return this.state.projects.includes(this.props.clientId.value);
    });

    console.log(thisClientProjects);

    const tableData = this.state.tasks.map(task => [
      task.id,
      task.title,
      getLocalDateFromUTC(task.startDate),
      getLocalDateFromUTC(task.endDate),
      task.estimation,
      task.userId
        ? findInArray(this.state.users, 'id', task.userId, 'name')
        : null,
    ]);
    console.log(this.state);
    return (
      <React.Fragment>
        <div className='col-lg-8 col-md-12 col-sm-12'>
          {this.state.loadingClients || this.state.loadingUsers ? (
            <Spinner spinnerPosition={'global-spinner'} />
          ) : (
            <Table
              entities={this.state.tasks}
              tableName={'Tasks'}
              tableHead={[
                'ID',
                'Title',
                'Start',
                'End',
                'Estimation',
                'Assignee',
              ]}
              tableData={tableData}
              tableColor={'primary'}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}
