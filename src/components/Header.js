import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
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
            <a
              href='https://www.lesewert.de/'
              className='simple-text logo-normal'>
              <img
                src='https://www.lesewert.de/files/lesewert/img/lesewert_logo.svg'
                alt='Lesewert'
              />
            </a>
          </div>
          <div className='sidebar-wrapper'>
            <ul className='nav'>
              <li className='nav-item '>
                <NavLink
                  to='/dashboards'
                  className='nav-link '
                  activeClassName='selected'
                  isActive={(match, location) => {
                    return location.pathname === '/';
                  }}>
                  <i className='material-icons'>dashboard</i>
                  <p>Dashboard</p>
                </NavLink>
              </li>

              <li className='nav-item '>
                <NavLink
                  to='/clients'
                  className='nav-link'
                  activeClassName='selected'>
                  <i className='material-icons'>people</i>
                  <p>Clients</p>
                </NavLink>
              </li>

              <li className='nav-item '>
                <NavLink
                  to='/projects'
                  className='nav-link'
                  activeClassName='selected'>
                  <i className='material-icons'>library_books</i>
                  <p>Projects</p>
                </NavLink>
              </li>

              <li className='nav-item '>
                <NavLink
                  to='/tasks'
                  className='nav-link'
                  activeClassName='selected'>
                  <i className='material-icons'>notes</i>
                  <p>Tasks</p>
                </NavLink>
              </li>

              <li className='nav-item '>
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
              <div className='navbar-wrapper'>
                <a className='navbar-brand' href='/dashboard'>
                  Dashboard
                </a>
              </div>
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                aria-controls='navigation-index'
                aria-expanded='false'
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
                      href='#pablo'
                      id='navbarDropdownProfile'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'>
                      <i className='material-icons'>person</i>
                      ricardo schmidt
                    </a>
                    <div
                      className='dropdown-menu dropdown-menu-right'
                      aria-labelledby='navbarDropdownProfile'>
                      <Link to='/profile' className='dropdown-item'>
                        Profile
                      </Link>
                      <a className='dropdown-item' href='#'>
                        Settings
                      </a>
                      <div className='dropdown-divider' />
                      <Link to='/login' className='dropdown-item'>
                        Log out
                      </Link>
                    </div>
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
