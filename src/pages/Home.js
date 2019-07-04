import React, {Component} from 'react';
import Header from '../components/Header';
import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import ProjectsSummary from '../components/dashboard/ProjectsSummary';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className='main-panel'>
          <div className='content'>
            <div className='container-fluid'>
              <WelcomeBanner />
              <ProjectsSummary />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
