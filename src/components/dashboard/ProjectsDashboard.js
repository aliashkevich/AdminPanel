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
      didMount: false,
    };
    this.getProjects = this.getProjects.bind(this);
  }

  getProjects() {
    fetch(`${config.apiUrl}/projects`)
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
    this.setState({didMount: true});
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
            <Table
              entities={this.state.projects}
              tableName={'Projects'}
              tableDescription={'Projects nearing completion'}
              tableHead={['Title', 'Start', 'End']}
              tableData={tableData.slice(0, 4)}
              tableColor={'info'}
              visible={`${this.state.didMount && 'visible'}`}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectsDashboard;
