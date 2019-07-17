import React from 'react';
import {config} from '../../util/config.js';
import Spinner from '../global/Spinner';
import {getLocalDateFromUTC} from '../../util/date';
import {Link} from 'react-router-dom';

export default class ProjectTasksTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      projects: [],
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
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getProjects();
  }

  render() {
    const clientProjects = this.state.projects.filter(
      project => project.clientId === this.props.clientId,
    );

    if (this.state.loading) {
      return <Spinner spinnerPosition={'global-spinner'} />;
    } else {
      return (
        <React.Fragment>
          <div className='col-lg-8 col-md-12 col-sm-12'>
            {clientProjects.map((project, index) => {
              return (
                <div class='card' key={index}>
                  <div class='card-header card-header-text card-header-primary'>
                    <Link
                      to={{
                        pathname: `/projects/${project.id}`,
                        state: {
                          id: project.id,
                        },
                      }}>
                      <div class='project-summary-title card-text'>
                        <h4 class='card-title'>Project: {project.title}</h4>
                      </div>
                    </Link>
                    <div class='card-body font-grey'>
                      <b>
                        {getLocalDateFromUTC(project.startDate)}-
                        {getLocalDateFromUTC(project.endDate)}
                      </b>
                      <br />
                      <br />
                      {project.summary}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </React.Fragment>
      );
    }
  }
}
