import React, {Component} from 'react';
import LoginForm from '../components/LoginForm';
import User from '../components/User.json';
import {Redirect} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      redirect: false,
      users: [],
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
  };

  onSubmit = event => {
    event.preventDefault();
    let userArray = this.state.users;
    let existUser = userArray.find(data => {
      return data.email === this.state.email; // if can't find, it will return undefined
    });
    if (existUser !== undefined) {
      if (existUser.password === this.state.password) {
        alert('Login successful');
        this.setState({redirect: true});
      } else {
        alert('Login failed: password is wrong');
        this.setState({password: ''});
      }
    } else {
      alert('Login failed: you are not registered');
      this.setState({email: '', password: ''});
    }
  };

  componentDidMount() {
    fetch('https://lesewert.herokuapp.com/api/v1/users')
      .then(res => res.json())
      .then(data => {
        this.setState({
          users: data.users,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />;
    } else {
      return (
        <div>
          <LoginForm
            email={this.state.email}
            password={this.state.password}
            onSubmit={this.onSubmit}
            handleInputChange={this.handleInputChange}
          />
        </div>
      );
    }
  }
}

export default Login;
