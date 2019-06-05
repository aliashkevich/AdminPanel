import React from 'react';
import {Link} from 'react-router-dom';

export default function ProjectAdd() {
  return (
    <div className='container-fluid'>
      <Link className='text-light' to='/newproject'>
        <button type='button' className='btn btn-success'>
          <i className='material-icons'>add_circle</i> New project
        </button>
      </Link>
    </div>
  );
}
