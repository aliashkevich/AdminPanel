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
          type='button'
          className='btn btn-danger btn-fab btn-fab-mini btn-round'>
          <i className='material-icons'>delete</i>
        </button>
      </td>
    </tr>
  );
}
