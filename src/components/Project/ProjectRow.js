import React from 'react';
import {Link} from 'react-router-dom';

export default function ProjectRow(props) {
  return (
    <tr>
      <td>{props.project.id}</td>
      <Link to='/project-detail' className='link'>
        <td className='text-warning'>{props.project.title}</td>
      </Link>
      <td>{props.project.start_date.slice(0, 10)}</td>
      <td>{props.project.end_date.slice(0, 10)}</td>
      <td>{props.project.participants.length}</td>
      <td>
        <button
          type='button'
          className='btn btn-default btn-fab btn-fab-mini btn-round'>
          <i className='material-icons'>edit</i>
        </button>
        <button
          type='button'
          className='btn btn-danger btn-fab btn-fab-mini btn-round'>
          <i className='material-icons'>delete</i>
        </button>
      </td>
    </tr>
  );
}
