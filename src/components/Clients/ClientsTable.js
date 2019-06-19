import React from 'react';
import ActionsTable from '../global/ActionsTable';

export default function ClientsTable(props) {
  const tableName = 'Clients';
  const tableHead = ['ID', 'Initials', 'Name'];
  const tableData = props.clients.map(client => [
    client.id,
    client.initials,
    client.name,
  ]);
  const tableColor = 'primary';

  return (
    <div className='main-panel'>
      <div className='content'>
        <div className='container-fluid'>
          <button type='button' className='btn btn-success'>
            <i className='material-icons'>add_circle</i> New Client
          </button>
          <ActionsTable
            tableName={tableName}
            tableHead={tableHead}
            tableData={tableData}
            tableColor={tableColor}
          />
        </div>
      </div>
    </div>
  );
}
