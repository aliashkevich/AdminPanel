import React from 'react';
import AddButton from '../global/AddButton';
import {Link} from 'react-router-dom';

class AddClientButton extends React.Component {
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
    const buttonName = 'New Client';
    return (
      <React.Fragment>
        <Link className='text-light' to='/clients/new'>
          <AddButton
            buttonName={buttonName}
            visible={`${this.state.didMount && 'visible'}`}
          />
        </Link>
      </React.Fragment>
    );
  }
}

export default AddClientButton;
