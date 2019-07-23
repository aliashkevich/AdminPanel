import React from 'react';
import Spinner from '../global/Spinner';
import {config} from '../../util/config.js';
import './TaskDetailCard.css';
import ProjectInfo from './ProjectInfo';
import TaskSummaryCard from './TaskSummaryCard';
import TaskDescriptionCard from './TaskDescriptionCard';
import TaskInfo from './TaskInfo';
import {authHeader} from '../../util/authHeader.js';

export default class TaskDetailCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {},
      id: props.id,
      projectId: '',
      loading: true,
      projects: {},
    };
    this.getTask = this.getTask.bind(this);
  }

  getTask() {
    fetch(`${config.apiUrl}/tasks/${this.state.id}`, {
      headers: authHeader,
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          task: data.task,
          projectId: data.task.projectId,
        });
      })
      .catch(error => console.log(error))
      .then(
        fetch(`${config.apiUrl}/projects/`, {
          headers: authHeader,
        })
          .then(res => res.json())
          .then(data => {
            this.setState({
              projects: data.projects,
              loading: false,
            });
          }),
      )
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.setState({id: this.props.id});
    this.getTask();
  }

  render() {
    return (
      <React.Fragment>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <div className='card'>
                <div className='card-header card-header-rose'>
                  <h4 className='card-title'>Task: {this.state.task.title}</h4>
                </div>
                {/* summary */}
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                      <ProjectInfo projectId={this.state.task.projectId} />
                      <TaskInfo
                        task={this.state.task}
                        userId={this.state.task.userId}
                      />
                    </div>
                    <div className='col-lg-8 col-md-12 col-sm-12'>
                      <TaskSummaryCard task={this.state.task} />
                      <TaskDescriptionCard task={this.state.task} />
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
