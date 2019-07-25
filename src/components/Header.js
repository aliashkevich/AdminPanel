import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo from '../img/lesewert-logo.svg';
import './Header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      didMount: false,
    };
  }
  componentDidMount() {
    this.setState({didMount: true});

    this.state = {
      mobileMenuOpened: false,
      mobileView: false,
    };

    this.closeMobileMenu = this.closeMobileMenu.bind(this);
    this.logOut = this.logOut.bind(this);
    this.notify = this.notify.bind(this);
    this.openMobileMenu = this.openMobileMenu.bind(this);
    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    if (window.innerWidth < 992) {
      this.setState({mobileView: true});
    }
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize() {
    let currentSize = window.innerWidth < 992;
    if (currentSize !== this.state.mobileView) {
      this.setState({mobileView: currentSize});
    }
  }

  closeMobileMenu() {
    let toggler = document.getElementsByClassName('navbar-toggler')[0];
    if (toggler !== undefined && toggler.classList.contains('toggled')) {
      toggler.classList.remove('toggled');
    }

    let root = document.getElementsByTagName('html')[0];
    if (root !== undefined && root.classList.contains('nav-open')) {
      root.classList.remove('nav-open');
    }

    this.setState({
      mobileMenuOpened: false,
    });
  }

  logOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.notify();
    this.closeMobileMenu();
  }

  notify() {
    var event = new Event('authenticated');
    document.dispatchEvent(event);
  }

  openMobileMenu() {
    let root = document.getElementsByTagName('html')[0];
    if (root !== undefined && root.classList.contains('nav-open')) {
      this.setState({
        mobileMenuOpened: true,
      });
    }
  }

  render() {
    let userFromStorage = localStorage.getItem('user');
    let parsedUser = JSON.parse(userFromStorage);
    const {didMount} = this.state;

    return (
      <React.Fragment>
        <div
          className='sidebar'
          data-color='orange'
          data-background-color='white'
          data-image='../assets/img/sidebar-1.jpg'>
          <div className='logo'>
            <NavLink
              to='/'
              className='simple-text logo-normal'
              onClick={this.closeMobileMenu}>
              <img src={logo} alt='Lesewert' />
            </NavLink>
          </div>
          <div className='sidebar-wrapper'>
            <ul className='nav'>
              {this.state.mobileMenuOpened && this.state.mobileView ? (
                <li className='nav-item dropdown mobile-dropdown-custom'>
                  <a
                    className='nav-link'
                    id='navbarDropdownProfile'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'>
                    <i className='material-icons'>person</i>
                    <p className='d-lg-none d-md-block'>Account</p>
                  </a>
                  <div
                    className='dropdown-menu dropdown-menu-right mobile'
                    aria-labelledby='navbarDropdownProfile'
                    x-placement='top-end'>
                    <NavLink
                      to='/profile'
                      className='nav-item dropdown-item'
                      onClick={this.closeMobileMenu}>
                      Profile
                    </NavLink>
                    <div className='dropdown-divider' />
                    <NavLink
                      to='/login'
                      className='dropdown-item nav-item'
                      onClick={this.logOut}>
                      Log out
                    </NavLink>
                  </div>
                </li>
              ) : null}

              <li className='nav-item' onClick={this.closeMobileMenu}>
                <NavLink
                  to='/dashboard'
                  className='nav-link '
                  activeClassName={`selected bounce-in ${didMount &&
                    'visible'}`}
                  isActive={(match, location) => {
                    return (
                      location.pathname === '/' ||
                      location.pathname === '/dashboard'
                    );
                  }}>
                  <i className='material-icons'>dashboard</i>
                  <p>Dashboard</p>
                </NavLink>
              </li>

              <li className='nav-item' onClick={this.closeMobileMenu}>
                <NavLink
                  to='/clients'
                  className='nav-link'
                  activeClassName={`selected grow ${didMount && 'visible'}`}>
                  <i className='material-icons'>people</i>
                  <p>Clients</p>
                </NavLink>
              </li>

              <li className='nav-item' onClick={this.closeMobileMenu}>
                <NavLink
                  to='/projects'
                  className='nav-link'
                  activeClassName={`selected grow ${didMount && 'visible'}`}>
                  {' '}
                  <i className='material-icons'>library_books</i>
                  <p>Projects</p>
                </NavLink>
              </li>

              <li className='nav-item' onClick={this.closeMobileMenu}>
                <NavLink
                  to='/tasks'
                  className='nav-link'
                  activeClassName={`selected grow ${didMount && 'visible'}`}>
                  {' '}
                  <i className='material-icons'>notes</i>
                  <p>Tasks</p>
                </NavLink>
              </li>

              <li className='nav-item' onClick={this.closeMobileMenu}>
                <NavLink
                  to='/administration'
                  className='nav-link'
                  activeClassName={`selected grow ${didMount && 'visible'}`}>
                  {' '}
                  <i className='material-icons'>content_paste</i>
                  <p>Administration</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='main-panel'>
          <nav className='navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top '>
            <div className='container-fluid'>
              <div className='navbar-wrapper' />
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                aria-controls='navigation-index'
                aria-expanded='true'
                aria-label='Toggle navigation'
                onClick={this.openMobileMenu}>
                <span className='sr-only'>Toggle navigation</span>
                <span className='navbar-toggler-icon icon-bar' />
                <span className='navbar-toggler-icon icon-bar' />
                <span className='navbar-toggler-icon icon-bar' />
              </button>
              <div className='collapse navbar-collapse justify-content-end'>
                <ul className='navbar-nav'>
                  <li className='nav-item dropdown'>
                    <a
                      className='nav-link'
                      href='javascript:void(0)'
                      id='navbarDropdownProfile'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'>
                      <i className='material-icons'>person</i>
                      {parsedUser !== null ? parsedUser.name : 'login'}
                    </a>
                    {parsedUser !== null ? (
                      <DropdownAfterLogin logOut={this.logOut} />
                    ) : (
                      <DropdownBeforeLogin />
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

function DropdownBeforeLogin() {
  return (
    <div
      className='dropdown-menu dropdown-menu-right'
      aria-labelledby='navbarDropdownProfile'>
      <Link to='/login' className='dropdown-item'>
        Log in
      </Link>
    </div>
  );
}

function DropdownAfterLogin(props) {
  return (
    <div
      className='dropdown-menu dropdown-menu-right'
      aria-labelledby='navbarDropdownProfile'>
      <Link to='/profile' className='dropdown-item'>
        Profile
      </Link>
      <div className='dropdown-divider' />
      <Link to='/login' className='dropdown-item' onClick={props.logOut}>
        Log out
      </Link>
    </div>
  );
}
