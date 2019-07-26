import React, {Component} from 'react';
import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import ProjectsDashboard from '../components/dashboard/ProjectsDashboard';
import TasksDashboard from '../components/dashboard/TasksDashboard';
import GraphTasks from '../components/dashboard/GraphTasks.js';
import GraphClients from '../components/dashboard/GraphClients.js';
import GraphProjects from '../components/dashboard/GraphProjects.js';
import SmallCards from '../components/dashboard/SmallCards.js';

export default class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='main-panel'>
          <div className='content'>
            <div className='form-row col-md-12'>
              <WelcomeBanner />
              <SmallCards />
            </div>
            <div className='form-row col-md-12'>
              <GraphTasks />
              <GraphClients />
              <GraphProjects />
            </div>
            <div className='form-row col-md-12'>
              <ProjectsDashboard />
              <TasksDashboard />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
