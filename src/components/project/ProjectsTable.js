import React from 'react';
import ActionsTable from '../global/ActionsTable';
import {Link} from 'react-router-dom';

export default class ProjectsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      updated: false,
    };
    this.getProjects = this.getProjects.bind(this);
    this.deleteOnClick = this.deleteOnClick.bind(this);
  }

  getProjects() {
    fetch('https://lesewert.herokuapp.com/api/v1/projects')
      .then(res => res.json())
      .then(data => {
        this.setState({
          projects: data.projects,
          updated: false,
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getProjects();
  }

  deleteOnClick(project) {
    const options = {
      method: 'DELETE',
      updated: false,
    };
    fetch(
      `https://lesewert.herokuapp.com/api/v1/projects/${project.id}`,
      options,
    )
      .then(res => console.log(res))
      .then(this.setState({updated: true}))
      .catch(error => console.log(error));
  }

  render() {
    const tableData = this.state.projects.map(project => [
      project.id,
      <Link to={`/projects/${project.id}`} className='text-info'>
        {project.title}
      </Link>,
      project.start_date.slice(0, 10),
      project.end_date.slice(0, 10),
      project.participants.length,
    ]);

    return (
      <ActionsTable
        entities={this.state.projects}
        tableName={'Projects'}
        tableHead={['ID', 'Title', 'Start', 'End', 'Participants']}
        tableData={tableData}
        tableColor={'info'}
        deleteOnClick={this.deleteOnClick}
        confirmationFieldName={'title'}
      />
    );
  }
}
