import React from 'react';
import Table from '../global/Table';
import {Link} from 'react-router-dom';
import Spinner from '../global/Spinner';

class ProjectsDashboard extends React.Component {
  static defaultProps = {
    url: 'https://lesewert.herokuapp.com/api/v1',
  };
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      loading: false,
    };
    this.getProjects = this.getProjects.bind(this);
  }

  getProjects() {
    fetch(`${this.props.url}/projects`)
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
      project.start_date.slice(0, 10),
      project.end_date.slice(0, 10),
    ]);
    return (
      <React.Fragment>
        <div className='form-group col-lg-6 col-md-12'>
          {this.state.loading ? (
            <Spinner />
          ) : (
            <Table
              entities={this.state.projects}
              tableName={'Projects'}
              tableDescription={'Projects nearing completion'}
              tableHead={['Title', 'Start', 'End']}
              tableData={tableData.slice(0, 4)}
              tableColor={'info'}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectsDashboard;
