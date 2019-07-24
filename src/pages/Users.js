import React from 'react';
import UsersTable from '../components/administration/UsersTable';

export default function Tasks() {
  return (
    <React.Fragment>
      <div className='main-panel'>
        <div className='content'>
          <div className='container-fluid'>
            <UsersTable />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
