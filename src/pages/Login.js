import React, {Component} from 'react';
import LoginForm from '../components/LoginForm';
// import User from '../components/User.json';
import {Redirect} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loading: true,
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
      this.state.users.find(data => {
        return data.email === this.state.email; // if can't find, it will return undefined
      }) != undefined &&
      this.state.users.filter(data => {
        return data.password === this.state.password;
      }) != undefined
    ) {
      alert('Login successful');
    } else {
      alert('Login failed');
      this.setState({redirect: true});
    }
  };

  componentDidMount() {
    fetch('https://workshop-express.herokuapp.com/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          users: data.user,
        });
      });
  }

  render() {
    console.log(this.state.users);

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

export default Login;
