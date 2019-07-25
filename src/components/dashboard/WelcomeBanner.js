import React from 'react';
import './Dashboard.css';

class WelcomeBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      didMount: false,
    };
  }

  componentDidMount() {
    this.setState({didMount: true});
  }

  render() {
    let userFromStorage = localStorage.getItem('user');
    let parsedUser = JSON.parse(userFromStorage);
    const {didMount} = this.state;
    return (
      <React.Fragment>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-header card-header-text card-header-primary'>
              <div className={`card-text grow ${didMount && 'visible'}`}>
                <h4 className='card-title welcome-title'>
                  Welcome
                  <h4 className={`text-transition ${didMount && 'visible'}`}>
                    {parsedUser ? parsedUser.name : 'user'}
                  </h4>
                </h4>
              </div>
            </div>
            <div className='card-body'>
              Welcome to our project dashboard. Feel free to add, edit and
              delete clients, projects and tasks! Click on their names in order
              to access the details.
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default WelcomeBanner;
