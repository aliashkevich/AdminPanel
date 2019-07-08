import React, {Component} from 'react';
import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import ProjectsDashboard from '../components/dashboard/ProjectsDashboard';
import TasksDashboard from '../components/dashboard/TasksDashboard';
import DataGraph1 from '../components/dashboard/DataGraph1.js';
import DataGraph2 from '../components/dashboard/DataGraph2.js';
import DataGraph3 from '../components/dashboard/DataGraph3.js';
import SmallCards from '../components/dashboard/SmallCards.js';

export default class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='main-panel'>
          <div className='content'>
            <div className='container-fluid'>
              <div className='form-row col-md-12'>
                <WelcomeBanner />
                <SmallCards />
              </div>
              <div className='form-row col-md-12'>
                <DataGraph1 />
                <DataGraph2 />
                <DataGraph3 />
              </div>
              <div className='form-row col-md-12'>
                <ProjectsDashboard />
                <TasksDashboard />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
