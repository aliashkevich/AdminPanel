import React from 'react';
import Header from '../components/Header';
import ClientsTable from '../components/client/ClientsTable';
import AddClientButton from '../components/client/AddClientButton';

export default function Clients() {
  return (
    <React.Fragment>
      <Header />
      <div className='main-panel'>
        <div className='content'>
          <div className='container-fluid'>
            <AddClientButton />
            <ClientsTable />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
