import React from 'react';

export default function ProjectRow(props) {
  return (
    <tr>
      <td>{props.project.id}</td>
      <td className='text-warning'>{props.project.title}</td>
      <td>{props.project.start_date.slice(0, 10)}</td>
      <td>{props.project.end_date.slice(0, 10)}</td>
      <td>{props.project.participants.length}</td>
      <td>
        <button
          type='button'
          className='btn btn-default btn-fab btn-fab-mini btn-round'>
          <i className='material-icons'>edit</i>
        </button>
      </td>
      <td>
        <button
          type='button'
          className='btn btn-danger btn-fab btn-fab-mini btn-round'>
          <i className='material-icons'>delete</i>
        </button>
      </td>
    </tr>
  );
}
