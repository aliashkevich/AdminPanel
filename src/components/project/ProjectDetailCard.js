import React from 'react';
import ClientInfo from './ClientInfo';
import Participants from './Participants';
import ProjectSummary from './ProjectSummary';
import ProjectTasks from './ProjectTasks';
import Spinner from '../global/Spinner';
import {config} from '../../util/config.js';
import './ProjectDetailCard.css';

export default class ProjectDetailCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      project: {},
      id: props.id,
      client: '',
      loading: true,
    };
    this.getProject = this.getProject.bind(this);
  }

  getProject() {
    fetch(`${config.apiUrl}/projects/${this.state.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          project: data.project,
          client: data.project.clientId,
          participants: data.project.participants,
          loading: false,
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.setState({id: this.props.id});
    this.getProject();
  }

  render() {
    if (this.state.project === {}) {
      return null;
    }
    return (
      <React.Fragment>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div className='main-panel'>
            <div className='content'>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-lg-12 col-md-12 col-sm-12'>
                    <div className='card'>
                      <div className='card-header card-header-info'>
                        <h4 className='card-title'>
                          {this.state.project.title}
                        </h4>
                        <p className='category'>
                          Project ID: <span>{this.state.project.id}</span>
                        </p>
                      </div>
                      {/* summary */}
                      <div className='card-body'>
                        <div className='row'>
                          <ClientInfo clientId={this.state.client} />
                          <ProjectSummary project={this.state.project} />
                        </div>
                        <div className='row'>
                          <Participants
                            participantsArr={this.state.participants}
                          />
                          <ProjectTasks projectId={this.state.project.id} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
