import React from 'react';
import Table from '../global/Table';
import {Link} from 'react-router-dom';
import Spinner from '../global/Spinner';
import {getLocalDateFromUTC} from '../../util/date';
import {config} from '../../util/config.js';

class ProjectsDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      loading: true,
    };
    this.getProjects = this.getProjects.bind(this);
  }

  getProjects() {
    fetch(`${config.apiUrl}/projects`, {
      headers: new Headers({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      }),
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          projects: data.projects,
          loading: false,
        });
      })
      .catch(error => alert(error));
  }

  componentDidMount() {
    this.getProjects();
  }

  render() {
    const tableData = this.state.projects.map(project => [
      <Link to={`/projects/${project.id}`} className='text-info'>
        {project.title}
      </Link>,
      getLocalDateFromUTC(project.startDate),
      getLocalDateFromUTC(project.endDate),
    ]);
    return (
      <React.Fragment>
        <div className='form-group col-lg-6 col-md-12'>
          {this.state.loading ? (
            <Spinner spinnerPosition={'inline-spinner'} />
          ) : (
            <Link to={`/projects`}>
              <Table
                entities={this.state.projects}
                tableName={'Project'}
                tableDescription={'Projects nearing completion'}
                tableHead={['Title', 'Start', 'End']}
                tableData={tableData.slice(0, 4)}
                tableColor={'info'}
              />
            </Link>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectsDashboard;
