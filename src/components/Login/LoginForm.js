import React from 'react';
import './LoginForm.css';

function LoginForm({email, password, onSubmit, handleInputChange}) {
  return (
    <div className='container-fluid'>
      <div className='row vertical-center'>
        <div
          className='card card-nav-tabs text-center p-3 mx-auto col-lg-8 col-md-10 col-sm-12'
          data-color='orange'>
          <div className='card-header card-header-warning'>Log in</div>
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
