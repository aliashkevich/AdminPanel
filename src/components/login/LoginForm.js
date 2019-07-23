import React from 'react';
import './LoginForm.css';
import {Link} from 'react-router-dom';

function LoginForm({email, password, onSubmit, handleInputChange}) {
  return (
    <div className='container-fluid'>
      <div className='row vertical-center'>
        <div
          className='card card-nav-tabs text-center p-3 mx-auto col-xl-3 col-lg-4 col-md-6 col-xs-12'
          data-color='orange'>
          <div className='card-header card-header-warning'>
            <div className='logo'>
              <Link to='/'>
                <img
                  src='https://www.lesewert.de/files/lesewert/img/lesewert_logo.svg'
                  alt='Lesewert'
                />
              </Link>
            </div>
            <br />
            <p>Welcome to Lesewert Dashboard!</p>
          </div>
          <form onSubmit={onSubmit}>
            <div className='form-group mt-5'>
              <label htmlFor='exampleInputEmail1'>Email address</label>
              <input
                type='email'
                name='email'
                value={email}
                onChange={handleInputChange}
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>Password</label>
              <input
                type='password'
                name='password'
                value={password}
                onChange={handleInputChange}
                className='form-control'
                id='exampleInputPassword1'
                required
              />
            </div>
            {/* <div className='form-check'>
              <label className='form-check-label'>
                <input className='form-check-input' type='checkbox' value='' />
                Remember next time
                <span className='form-check-sign'>
                  <span className='check' />
                </span>
              </label>
            </div> */}
            <input type='submit' value='submit' className='btn btn-warning' />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
