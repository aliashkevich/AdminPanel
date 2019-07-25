import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo from '../img/lesewert-logo.svg';
import './Header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.closeMobileMenu = this.closeMobileMenu.bind(this);
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
  }

  render() {
    let userFromStorage = localStorage.getItem('user');
    let parsedUser = JSON.parse(userFromStorage);

    return (
      <React.Fragment>
        <div
          className='sidebar'
          data-color='orange'
          data-background-color='white'
          data-image='../assets/img/sidebar-1.jpg'>
          <div className='logo'>
            <NavLink to='/' className='simple-text logo-normal'>
              <img src={logo} alt='Lesewert' />
            </NavLink>
          </div>
          <div className='sidebar-wrapper'>
            <ul className='nav'>
              <li className='nav-item' onClick={this.closeMobileMenu}>
                <NavLink
                  to='/dashboard'
                  className='nav-link '
                  activeClassName='selected'
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
                  activeClassName='selected'>
                  <i className='material-icons'>people</i>
                  <p>Clients</p>
                </NavLink>
              </li>

              <li className='nav-item' onClick={this.closeMobileMenu}>
                <NavLink
                  to='/projects'
                  className='nav-link'
                  activeClassName='selected'>
                  <i className='material-icons'>library_books</i>
                  <p>Projects</p>
                </NavLink>
              </li>

              <li className='nav-item' onClick={this.closeMobileMenu}>
                <NavLink
                  to='/tasks'
                  className='nav-link'
                  activeClassName='selected'>
                  <i className='material-icons'>notes</i>
                  <p>Tasks</p>
                </NavLink>
              </li>

              <li className='nav-item' onClick={this.closeMobileMenu}>
                <NavLink
                  to='/administration'
                  className='nav-link'
                  activeClassName='selected'>
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
                className='navbar-toggler '
                type='button'
                data-toggle='collapse'
                aria-controls='navigation-index'
                aria-expanded='true'
                aria-label='Toggle navigation'>
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
                      href='#/'
                      id='navbarDropdownProfile'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'>
                      <i className='material-icons'>person</i>
                      {parsedUser !== null ? parsedUser.name : 'login'}
                    </a>
                    {parsedUser !== null ? (
                      <DropdownAfterLogin />
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
  const logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    notify();
  };

  const notify = () => {
    var event = new Event('authenticated');
    document.dispatchEvent(event);
  };

  return (
    <div
      className='dropdown-menu dropdown-menu-right'
      aria-labelledby='navbarDropdownProfile'>
      <Link to='/profile' className='dropdown-item'>
        Profile
      </Link>
      <div className='dropdown-divider' />
      <Link to='/login' className='dropdown-item' onClick={logOut}>
        Log out
      </Link>
    </div>
  );
}
