import React from 'react';
import Table from '../global/Table';
import {Link} from 'react-router-dom';
import Spinner from '../global/Spinner';
import {getLocalDateFromUTC} from '../../util/date';
import {config} from '../../util/config.js';

class TasksDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      loading: true,
    };
    this.getTasks = this.getTasks.bind(this);
  }

  getTasks() {
    fetch(`${config.apiUrl}/tasks`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          tasks: data.tasks,
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
      getLocalDateFromUTC(task.startDate),
      getLocalDateFromUTC(task.endDate),
    ]);
    return (
      <React.Fragment>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div className='form-group col-lg-6 col-md-12'>
            <Table
              entities={this.state.tasks}
              tableName={'Tasks'}
              tableDescription={'Tasks nearing completion'}
              tableHead={['Title', 'Start', 'End']}
              tableData={tableData.slice(0, 4)}
              tableColor={'rose'}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default TasksDashboard;
