import React from 'react';
import Header from '../components/Header';
import UsersTable from '../components/administration/UsersTable';
import AddUserButton from '../components/administration/AddUserButton';

export default function Tasks() {
  return (
    <React.Fragment>
      <Header />
      <div className='main-panel'>
        <div className='content'>
          <div className='container-fluid'>
            <AddUserButton />
            <UsersTable />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
