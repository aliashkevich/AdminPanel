import React from "react";

function Login() {
  return (
    <div className="card card-nav-tabs text-center w-50 p-3 mx-auto">
      <div className="card-header card-header-primary">
        Log in
      </div>
      <form>
        <div className="form-group mt-5">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" value="" />
            Remember next time
            <span className="form-check-sign">
              <span className="check"></span>
            </span>
          </label>
       </div>
       <button type="submit" className="btn btn-primary">Submit</button>
      </form>
  </div>
  );
}

export default Login;