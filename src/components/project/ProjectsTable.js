import React from 'react';
import ActionsTable from '../global/ActionsTable';
import {Link} from 'react-router-dom';

export default function ClientsTable(props) {
  const tableName = 'Projects';
  const tableHead = ['ID', 'Title', 'Start', 'End', 'Participants'];
  const tableData = props.projects.map(project => [
    project.id,
    <Link to={`/projects/${project.id}`} className='text-info'>
      {project.title}
    </Link>,
    project.start_date.slice(0, 10),
    project.end_date.slice(0, 10),
    project.participants.length,
  ]);
  const tableColor = 'info';

  return (
    <ActionsTable
      tableName={tableName}
      tableHead={tableHead}
      tableData={tableData}
      tableColor={tableColor}
    />
  );
}
