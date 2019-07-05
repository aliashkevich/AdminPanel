import React from 'react';
import Table from '../global/Table';
import {Link} from 'react-router-dom';

class ProjectsSummary extends React.Component {
  static defaultProps = {
    url: 'https://lesewert.herokuapp.com/api/v1',
  };
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      updated: false,
      loading: true,
    };
    this.getProjects = this.getProjects.bind(this);
  }

  getProjects() {
    fetch(`${this.props.url}/projects`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          projects: data.projects,
          updated: false,
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
          <Table
            entities={this.state.projects}
            tableName={'Projects'}
            tableDescription={'Projects nearing completion'}
            tableHead={['Title', 'Start', 'End']}
            tableData={tableData}
            tableColor={'info'}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectsSummary;
