import React from 'react';
import ActionsTable from '../global/ActionsTable';
import {Link} from 'react-router-dom';

export default class TasksTable extends React.Component {
  static defaultProps = {
    url: 'https://lesewert.herokuapp.com/api/v1',
  };

  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      updated: false,
    };
    this.getTasks = this.getTasks.bind(this);
    this.deleteOnClick = this.deleteOnClick.bind(this);
    this.updateOnClick = this.updateOnClick.bind(this);
  }

  getTasks() {
    fetch(`${this.props.url}/tasks`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          tasks: data.tasks,
          updated: false,
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getTasks();
  }

  deleteOnClick(task) {
    const options = {
      method: 'DELETE',
    };
    fetch(`${this.props.url}/tasks/${task.id}`, options)
      .then(this.setState({updated: true}))
      .catch(error => console.log(error));
  }

  updateOnClick(task) {
    const options = {
      method: 'PUT',
    };
    fetch(`${this.props.url}/tasks/${task.id}`, options)
      .then(this.setState({updated: true}))
      .catch(error => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.updated !== prevState.updated) {
      this.getTasks();
    }
  }

  render() {
    const tableData = this.state.tasks.map(task => [
      task.id,
      <Link to={`/tasks/${task.id}`} className='text-info'>
        {task.title}
      </Link>,
      task.start_date.slice(0, 10),
      task.due_date.slice(0, 10),
      task.estimation,
      task.assignee,
    ]);

    return (
      <ActionsTable
        entities={this.state.tasks}
        tableName={'Tasks'}
        tableHead={['ID', 'Title', 'Start', 'End', 'Estimation', 'Assignee']}
        tableData={tableData}
        tableColor={'rose'}
        deleteOnClick={this.deleteOnClick}
        confirmationFieldName={'title'}
        updateOnClick={this.updateOnClick}
        checkmarkFieldName={'status'}
        checkmarkValue={'finished'}
      />
    );
  }
}
