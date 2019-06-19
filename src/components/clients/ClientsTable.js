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
    <ActionsTable
      tableName={tableName}
      tableHead={tableHead}
      tableData={tableData}
      tableColor={tableColor}
    />
  );
}
