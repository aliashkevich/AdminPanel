import React from 'react';

function LoginForm({email, password, onSubmit, handleInputChange}) {
  return (
    <div
      className='card card-nav-tabs text-center w-50 p-3 mx-auto'
      data-color='orange'>
      <div className='card-header card-header-warning'>Log in</div>
      <form onSubmit={onSubmit}>
        <div className='form-group mt-5'>
          <label for='exampleInputEmail1'>Email address</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={handleInputChange}
            class='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='Enter email'
            required
          />
        </div>
        <div className='form-group'>
          <label for='exampleInputPassword1'>Password</label>
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
        <div className='form-check'>
          <label className='form-check-label'>
            <input className='form-check-input' type='checkbox' value='' />
            Remember next time
            <span className='form-check-sign'>
              <span className='check' />
            </span>
          </label>
        </div>
        <input type='submit' value='submit' className='btn btn-warning' />
      </form>
    </div>
  );
}

export default LoginForm;
