import React from 'react';
import {Link} from 'react-router-dom';

export default function ProjectRow(props) {
  return (
    <tr>
      <td>{props.project.id}</td>
      <td className='text-info'>
        <Link to={`/projects/${props.project.id}`} className='text-info'>
          {props.project.title}
        </Link>
      </td>
      <td>{props.project.start_date.slice(0, 10)}</td>
      <td>{props.project.end_date.slice(0, 10)}</td>
      <td>{props.project.participants.length}</td>
      <td>
        <button
          type='button'
          className='btn btn-default btn-fab btn-fab-mini btn-round'>
          <i className='material-icons'>edit</i>
        </button>{' '}
        <button
          data-toggle='modal'
          data-target='#confirmDelete'
          type='button'
          className='btn btn-danger btn-fab btn-fab-mini btn-round'>
          <i className='material-icons'>delete</i>
        </button>
        <div
          class='modal fade'
          id='confirmDelete'
          tabindex='-1'
          role='dialog'
          aria-labelledby='confirmDelete'
          aria-hidden='true'>
          <div class='modal-dialog' role='document'>
            <div class='modal-content'>
              <div class='modal-body'>
                Are you sure you wish to delete{' '}
                <span className='text-warning'>{props.project.title}?</span>
              </div>
              <div class='modal-footer'>
                <button
                  type='button'
                  class='btn btn-secondary'
                  data-dismiss='modal'>
                  Cancel
                </button>
                <button
                  type='button'
                  class='btn btn-warning'
                  data-dismiss='modal'
                  onClick={() => props.deleteOnClick(props.project.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}
