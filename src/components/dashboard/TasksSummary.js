import React from 'react';
import Table from '../global/Table';
import {Link} from 'react-router-dom';
import Spinner from '../global/Spinner';

class TasksSummary extends React.Component {
  static defaultProps = {
    url: 'https://lesewert.herokuapp.com/api/v1',
  };
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      updated: false,
      loading: true,
    };
    this.getTasks = this.getTasks.bind(this);
  }

  getTasks() {
    fetch(`${this.props.url}/tasks`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          tasks: data.tasks,
          updated: false,
          loading: false,
        });
      })
      .catch(error => alert(error));
  }

  componentDidMount() {
    this.getTasks();
  }

  render() {
    const tableData = this.state.tasks.map(task => [
      <Link to={`/tasks/${task.id}`} className='text-info'>
        {task.title}
      </Link>,
      task.start_date.slice(0, 10),
      task.due_date.slice(0, 10),
    ]);
    console.log(tableData);
    return (
      <React.Fragment>
        <div className='form-group col-lg-6 col-md-12'>
          {this.state.loading ? (
            <Spinner />
          ) : (
            <Table
              entities={this.state.tasks}
              tableName={'Tasks'}
              tableDescription={'Tasks nearing completion'}
              tableHead={['Title', 'Start', 'End']}
              tableData={tableData.slice(0, 4)}
              tableColor={'rose'}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default TasksSummary;
