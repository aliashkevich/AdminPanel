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

    if (
      User.find(data => {
        return data.email === this.state.email; // if can't find, it will return undefined
      }) != undefined &&
      User.filter(data => {
        return data.password === this.state.password;
      }) != undefined
    ) {
      alert('Login successful');
      this.setState({redirect: true});
    } else {
      alert('Login failed');
    }
  };

  // componentDidMount() {
  //   fetch('https://workshop-express.herokuapp.com/')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         users: data.user,
  //       });
  //     });
  // }

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
