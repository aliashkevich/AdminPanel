import React, {Component} from 'react';
import Profile from '../components/profile/Profile';

export default class ProfilePage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='main-panel'>
          <div className='content'>
            <Profile />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
