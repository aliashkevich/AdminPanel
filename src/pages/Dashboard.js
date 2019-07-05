import React, {Component} from 'react';
import Spinner from '../components/global/Spinner';
import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import ProjectsSummary from '../components/dashboard/ProjectsSummary';
import TasksSummary from '../components/dashboard/TasksSummary.js';
import DataGraph1 from '../components/dashboard/DataGraph1.js';
import DataGraph2 from '../components/dashboard/DataGraph2.js';
import DataGraph3 from '../components/dashboard/DataGraph3.js';
import SmallCards from '../components/dashboard/SmallCards.js';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updated: this.props.updated,
    };
  }
  render() {
    return (
      <React.Fragment>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div className='main-panel'>
            <div className='content'>
              <div className='container-fluid'>
                <div className='form-row col-md-12'>
                  <WelcomeBanner />
                  <SmallCards />
                </div>
                <div className='form-row col-md-12'>
                  <DataGraph1 key={this.state.key} />
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
        )}
      </React.Fragment>
    );
  }
}
