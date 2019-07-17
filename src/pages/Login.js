import React, {Component} from 'react';
import LoginForm from '../components/login/LoginForm';
import {config} from '../util/config';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      flash: '',
      user: {},
      token: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
    this.notify = this.notify.bind(this);
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      flash: '',
    });
  };

  onSubmit = event => {
    if (event) {
      event.preventDefault();
    }

    const payload = {
      email: this.state.email,
      password: this.state.password,
    };
    fetch(`${config.apiUrl}/auth/login`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(payload),
    })
      .then(res => res.json())
      .then(res =>
        res.token
          ? this.setState(
              {
                token: res.token,
                flash: res.flash,
                user: res.data,
              },
              () => this.setLocalStorage(),
            )
          : this.setState({
              flash: res.flash,
            }),
      )
      .catch(err => console.log(err));
  };

  setLocalStorage() {
    localStorage.setItem('token', this.state.token);
    localStorage.setItem('user', JSON.stringify(this.state.user));

    this.notify();
  }

  notify() {
    var event = new Event('authenticated');
    document.dispatchEvent(event);
  }

  render() {
    return (
      <React.Fragment>
        <LoginForm
          email={this.state.email}
          password={this.state.password}
          onSubmit={this.onSubmit}
          handleInputChange={this.handleInputChange}
          flash={this.state.flash}
        />
      </React.Fragment>
    );
  }
}

export default Login;
