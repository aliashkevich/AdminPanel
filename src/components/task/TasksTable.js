import React from 'react';
import ActionsTable from '../global/ActionsTable';
import {Link} from 'react-router-dom';
import Spinner from '../global/Spinner';
import {getLocalDateFromUTC} from '../../util/date';
import {config} from '../../util/config.js';
import {authHeader} from '../../util/authHeader.js';

export default class TasksTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      loadingTasks: true,
      users: [],
      loadingUsers: true,
      updated: false,
    };
    this.getTasks = this.getTasks.bind(this);
    this.deleteOnClick = this.deleteOnClick.bind(this);
    this.updateOnClick = this.updateOnClick.bind(this);
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

  componentDidMount() {
    this.getTasks();
  }

  deleteOnClick(task) {
    const options = {
      method: 'DELETE',
      headers: authHeader,
    };
    fetch(`${config.apiUrl}/tasks/${task.id}`, options)
      .then(this.setState({updated: true}))
      .catch(error => console.log(error));
  }

  updateOnClick(task) {
    const data = {status: 'done'};
    const options = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: authHeader,
    };
    fetch(`${config.apiUrl}/tasks/${task.id}`, options)
      .then(this.setState({updated: true}))
      .catch(error => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.updated !== prevState.updated) {
      this.getTasks();
    }
  }

  render() {
    function findInArray(array, arrayItemKey, value, arrayItemProperty) {
      var item = array.find(arrayItem => arrayItem[arrayItemKey] === value);
      return item ? item[arrayItemProperty] : '';
    }

    const tableData = this.state.tasks.map(task => [
      task.id,
      <Link to={`/tasks/${task.id}`} className='text-info'>
        {task.title}
      </Link>,
      getLocalDateFromUTC(task.startDate),
      getLocalDateFromUTC(task.endDate),
      `${task.estimation} hours`,
      task.userId
        ? findInArray(this.state.users, 'id', task.userId, 'name')
        : null,
    ]);

    return (
      <React.Fragment>
        {this.state.loadingClients || this.state.loadingUsers ? (
          <Spinner spinnerPosition={'global-spinner'} />
        ) : (
          <ActionsTable
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
            tableColor={'rose'}
            deleteOnClick={this.deleteOnClick}
            confirmationFieldName={'title'}
            updateOnClick={this.updateOnClick}
            checkmarkFieldName={'status'}
            checkmarkValue={'done'}
          />
        )}
      </React.Fragment>
    );
  }
}
