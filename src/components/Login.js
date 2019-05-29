import React, {Component} from 'react';
import User from './User.json';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange = event => {
    // will update state by name attribute, so state name should be same with it
    const {value, name} = event.target;
    this.setState({
      [name]: value,
    });
    console.log('email: ', this.state.email);
    console.log('password: ', this.state.password);
    console.log('event.target.value: ', event.target.value);
    console.log('event.target.name: ', event.target.name);
  };

  onSubmit = event => {
    event.preventDefault();
    if (
      User.filter(data => {
        console.log(data.email);
        return data.email === this.state.email;
      }) &&
      User.filter(data => {
        console.log(data.password);
        return data.password === this.state.password;
      })
    ) {
      alert('logged in!!');
    } else {
      alert('failed!!');
    }
  };

  render() {
    return (
      <div className='card card-nav-tabs text-center w-50 p-3 mx-auto'>
        <div className='card-header card-header-primary'>Log in</div>
        <form onSubmit={this.onSubmit}>
          <div className='form-group mt-5'>
            <label for='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.handleInputChange}
              class='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter email'
              required
            />
          </div>
          <div className='form-group'>
            <label for='exampleInputPassword1'>Password</label>
            <input
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.handleInputChange}
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Password'
              required
            />
          </div>
          <div className='form-check'>
            <label className='form-check-label'>
              <input className='form-check-input' type='checkbox' value='' />
              Remember next time
              <span className='form-check-sign'>
                <span className='check' />
              </span>
            </label>
          </div>
          <input type='submit' value='submit' className='btn btn-primary' />
        </form>
      </div>
    );
  }
}

export default Login;
