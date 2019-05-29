import React, {Component} from 'react';

export default class Header extends Component {
  render() {
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
              <li className='nav-item active  '>
                <a className='nav-link' href='./dashboard.html'>
                  <i className='material-icons'>dashboard</i>
                  <p>Dashboard</p>
                </a>
              </li>
              <li className='nav-item '>
                <a className='nav-link' href='./user.html'>
                  <i className='material-icons'>person</i>
                  <p>Clients</p>
                </a>
              </li>
              <li className='nav-item '>
                <a className='nav-link' href='./typography.html'>
                  <i className='material-icons'>library_books</i>
                  <p>Projects</p>
                </a>
              </li>
              <li className='nav-item '>
                <a className='nav-link' href='./typography.html'>
                  <i className='material-icons'>notes</i>
                  <p>Tasks</p>
                </a>
              </li>

              <li className='nav-item '>
                <a className='nav-link' href='./tables.html'>
                  <i className='material-icons'>content_paste</i>
                  <p>Administration</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='main-panel'>
          <nav className='navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top '>
            <div className='container-fluid'>
              <div className='navbar-wrapper'>
                <a className='navbar-brand' href='/dashboard'>
                  
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
                      Ricardo Schmidt
                    </a>
                    <div
                      className='dropdown-menu dropdown-menu-right'
                      aria-labelledby='navbarDropdownProfile'>
                      <a className='dropdown-item' href='#'>
                        Profile
                      </a>
                      <a className='dropdown-item' href='#'>
                        Settings
                      </a>
                      <div className='dropdown-divider' />
                      <a className='dropdown-item' href='#'>
                        Log out
                      </a>
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
