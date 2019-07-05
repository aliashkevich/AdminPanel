import React, {Component} from 'react';
import Header from '../components/Header';
import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import ProjectsSummary from '../components/dashboard/ProjectsSummary';
import TasksSummary from '../components/dashboard/TasksSummary.js';
import DataGraph1 from '../components/dashboard/DataGraph1.js';
import DataGraph2 from '../components/dashboard/DataGraph2.js';
import DataGraph3 from '../components/dashboard/DataGraph3.js';
import Other from '../components/dashboard/Other.js';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className='main-panel'>
          <div className='content'>
            <div className='container-fluid'>
              <div className='form-row col-md-12'>
                <WelcomeBanner />
                <Other />
              </div>
              <div className='form-row col-md-12'>
                <DataGraph1 />
                <DataGraph2 />
                <DataGraph3 />
              </div>
              <div className='form-row col-md-12'>
                <ProjectsSummary />
                <TasksSummary />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
