import React from 'react';

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
          <div className={`card grow ${didMount && 'visible'}`}>
            <div
              className={`card-header card-header-text card-header-primary bounce-in ${didMount &&
                'visible'}`}>
              <div className='card-text'>
                <h4 className='card-title'>
                  Welcome {parsedUser ? parsedUser.name : 'user'}
                </h4>
              </div>
            </div>
            <div className='card-body'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco...
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default WelcomeBanner;
