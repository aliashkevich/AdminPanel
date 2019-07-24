import React from 'react';
import './LoginForm.css';
import logo from '../../img/lesewert-logo.svg';

function LoginForm({email, password, onSubmit, handleInputChange, flash}) {
  return (
    <div className='container-fluid'>
      <div
        id='login-form'
        className='card card-nav-tabs text-center p-3 mx-auto col-lg-8 col-md-10 col-sm-12'
        data-color='orange'>
        <div className='card-header card-header-warning'>
          <div className='logo'>
            <img src={logo} alt='Lesewert' />
          </div>
          <br />
          <p>Welcome to Lesewert Dashboard!</p>
        </div>
        <form onSubmit={onSubmit}>
          <div className='form-group mt-4'>
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={handleInputChange}
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter email'
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
              placeholder='Password'
              required
            />
          </div>

          <input type='submit' value='submit' className='btn btn-warning' />
        </form>
      </div>
      {flash ? (
        <div className='alert-container'>
          <div
            className='alert alert-warning alert-dismissible fade show'
            role='alert'>
            {flash}
            <button
              type='button'
              className='close close-alert'
              data-dismiss='alert'
              aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default LoginForm;
