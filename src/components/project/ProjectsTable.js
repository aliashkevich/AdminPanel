import React from 'react';
import ActionsTable from '../global/ActionsTable';
import {Link} from 'react-router-dom';
import Spinner from '../global/Spinner';

export default class ProjectsTable extends React.Component {
  static defaultProps = {
    url: 'https://lesewert.herokuapp.com/api/v1',
  };

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      updated: false,
      loading: true,
      didMount: false,
    };
    this.getProjects = this.getProjects.bind(this);
    this.deleteOnClick = this.deleteOnClick.bind(this);
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
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getProjects();
    this.setState({didMount: true});
  }

  deleteOnClick(project) {
    const options = {
      method: 'DELETE',
    };
    fetch(`${this.props.url}/projects/${project.id}`, options)
      .then(this.setState({updated: true}))
      .catch(error => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.updated !== prevState.updated) {
      this.getProjects();
    }
  }

  render() {
    const tableData = this.state.projects.map(project => [
      project.id,
      <Link
        to={{
          pathname: `/projects/${project.id}`,
          state: {
            id: project.id,
          },
        }}
        className='text-info'>
        {project.title}
      </Link>,
      project.startDate.slice(0, 10),
      project.endDate.slice(0, 10),
      project.participants.length,
    ]);

    return (
      <React.Fragment>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <ActionsTable
            entities={this.state.projects}
            tableName={'Projects'}
            tableHead={['ID', 'Title', 'Start', 'End', 'Participants']}
            tableData={tableData}
            tableColor={'info'}
            deleteOnClick={this.deleteOnClick}
            confirmationFieldName={'title'}
            visible={`${this.state.didMount && 'visible'}`}
          />
        )}
      </React.Fragment>
    );
  }
}
