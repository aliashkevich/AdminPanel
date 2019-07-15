import React from 'react';
import Spinner from '../global/Spinner';
import {config} from '../../util/config.js';
import './TaskDetailCard.css';
import TaskSummaryCard from './TaskSummaryCard';
import TaskDescriptionCard from './TaskDescriptionCard';
import {getLocalDateFromUTC} from '../../util/date';

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
    fetch(`${config.apiUrl}/tasks/${this.state.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          task: data.task,
          projectId: data.task.projectId,
        });
      })
      .catch(error => console.log(error))
      .then(
        fetch(`${config.apiUrl}/projects/`)
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
    console.log(this.state);
    return (
      <React.Fragment>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <div className='card'>
                <div className='card-header card-header-info'>
                  <h4 className='card-title'>{this.state.task.title}</h4>
                  <p className='category'>
                    Project Id: <span>{this.state.projectId}</span>
                  </p>
                </div>
                {/* summary */}
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                      <div className='card'>
                        <div class='card-header card-header-text card-header-success'>
                          <div class='card-text'>
                            <h4 class='card-title '>
                              Status: {this.state.task.status}
                            </h4>
                          </div>
                        </div>
                        <div className='card-footer'>
                          <p>
                            <b>Start Date:</b>{' '}
                            {getLocalDateFromUTC(this.state.task.startDate)}
                          </p>
                          <p>
                            <b>End Date:</b>{' '}
                            {getLocalDateFromUTC(this.state.task.endDate)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <TaskSummaryCard task={this.state.task} />
                    <TaskDescriptionCard task={this.state.task} />
                  </div>
                  <div className='row' />
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
