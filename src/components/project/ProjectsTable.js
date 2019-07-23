import React from 'react';
import ActionsTable from '../global/ActionsTable';
import {Link} from 'react-router-dom';
import Spinner from '../global/Spinner';
import {getLocalDateFromUTC} from '../../util/date';
import {config} from '../../util/config.js';
import CircleImg from '../global/CircleImg';

export default class ProjectsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [],
      projects: [],
      updated: false,
      loading: true,
    };
    this.getProjects = this.getProjects.bind(this);
    this.deleteOnClick = this.deleteOnClick.bind(this);
  }

  getProjects() {
    fetch(`${config.apiUrl}/projects`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          projects: data.projects,
          updated: false,
        });
      })
      .catch(error => console.log(error))
      .then(
        fetch(`${config.apiUrl}/clients`)
          .then(res => res.json())
          .then(data => {
            this.setState({
              clients: data.clients,
              loading: false,
            });
          })
          .catch(error => console.log(error)),
      );
  }

  componentDidMount() {
    this.getProjects();
  }

  deleteOnClick(project) {
    const options = {
      method: 'DELETE',
    };
    fetch(`${config.apiUrl}/projects/${project.id}`, options)
      .then(this.setState({updated: true}))
      .catch(error => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.updated !== prevState.updated) {
      this.getProjects();
    }
  }

  render() {
    function findInArray(array, arrayItemKey, value, arrayItemProperty) {
      var item = array.find(arrayItem => arrayItem[arrayItemKey] === value);
      return item ? item[arrayItemProperty] : '';
    }

    const tableData = this.state.projects.map(project => [
      <CircleImg
        logo={
          project.clientId
            ? findInArray(this.state.clients, 'id', project.clientId, 'logo')
            : null
        }
      />,
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
      getLocalDateFromUTC(project.startDate),
      getLocalDateFromUTC(project.endDate),
      project.participants.length,
    ]);

    return (
      <React.Fragment>
        {this.state.loading ? (
          <Spinner spinnerPosition={'global-spinner'} />
        ) : (
          <ActionsTable
            entities={this.state.projects}
            tableName={'Projects'}
            tableHead={[
              'Client',
              'ID',
              'Title',
              'Start',
              'End',
              'Participants',
            ]}
            tableData={tableData}
            tableColor={'info'}
            deleteOnClick={this.deleteOnClick}
            confirmationFieldName={'title'}
          />
        )}
      </React.Fragment>
    );
  }
}
