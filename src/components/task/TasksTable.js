import React from 'react';
import ActionsTable from '../global/ActionsTable';
import {Link} from 'react-router-dom';
import Spinner from '../global/Spinner';
import {getLocalDateFromUTC} from '../../util/date';
import {config} from '../../util/config.js';

export default class TasksTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      loadingTasks: true,
      users: [],
      loadingUsers: true,
      updated: false,
      projects: [],
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
      )
      .then(
        fetch(`${config.apiUrl}/projects`)
          .then(res => res.json())
          .then(data => {
            this.setState({
              projects: data.projects,
              updated: false,
              loadingProjects: false,
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
      headers: {
        'Content-Type': 'application/json',
      },
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

  // createNewArray = tasksArray => {
  //   const resultArray = [];
  //   const initialArray = tasksArray;

  // initialArray.map(item => {
  //   const array1 = [];
  //   array1.push(item);
  //   // initialArray.splice(index, 1);

  //   const other = initialArray.filter(currentObj => {
  //     return Object.values(currentObj)[1] == array1[0].projectId;
  //   });

  //   array1.push(...other);
  //   // console.log(other);

  //   // const element = initialArray[index].projectId;
  //   resultArray.push(array1);
  //   console.log('resultArray', resultArray);
  // });
  // for (let index = 0; index < initialArray.length; index++) {
  //   const array1 = [];
  //   array1.push(initialArray[index]);
  //   initialArray.splice(index, 1);

  //   const other = initialArray.filter(currentObj => {
  //     return Object.values(currentObj)[1] == array1[0].projectId;
  //   });

  //   array1.push(...other);
  //   // console.log(other);

  //   // const element = initialArray[index].projectId;
  //   resultArray.push(array1);
  //   console.log('resultArray', resultArray, index);
  // }
  // for (let index = 0; index < initialArray.length; index++) {
  //   const array1 = [];
  //   array1.push(initialArray[index]);
  //   console.log(array1);

  //   const other = initialArray.filter(currentObj => {
  //     return Object.values(currentObj)[1] == array1[0].projectId;
  //   });

  //   array1.push(...other);
  //   // console.log(other);

  //   // const element = initialArray[index].projectId;
  //   resultArray.push(array1);
  //   console.log('resultArray', resultArray, index);
  // }
  // };

  render() {
    function findInArray(array, arrayItemKey, value, arrayItemProperty) {
      var item = array.find(arrayItem => arrayItem[arrayItemKey] === value);
      return item ? item[arrayItemProperty] : '';
    }
    // if (this.state.tasks.length > 0) {
    //   console.log(this.createNewArray(this.state.tasks));
    // }

    var orderedTasks = this.state.tasks,
      tasksByProjects = orderedTasks.reduce(function(r, a) {
        r[a.projectId] = r[a.projectId] || [];
        r[a.projectId].push(a);
        return r;
      }, Object.create(null));

    console.log(tasksByProjects);

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
          this.state.tasks.map(task => (
            <ActionsTable
              entities={this.state.tasks}
              tableName={task.id}
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
          ))
        )}
      </React.Fragment>
    );
  }
}
