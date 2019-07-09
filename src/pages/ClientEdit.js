import React from 'react';
import Header from '../components/Header';
import ClientNew from '../components/client/ClientNew';

class NewClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: true,
    };
  }
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <Header />
        <div className='main-panel'>
          <div className='content'>
            <ClientNew edit={this.props.edit} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NewClient;
