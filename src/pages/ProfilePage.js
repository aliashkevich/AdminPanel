import React, {Component} from 'react';
import Header from '../components/Header';
import Profile from '../components/profile/Profile';
// import {Link} from 'react-router-dom';

export default class ProfilePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className='main-panel'>
          <div className='content'>
            <Profile />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
