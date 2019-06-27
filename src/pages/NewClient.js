import React from 'react';
import Header from '../components/Header';
import ClientNew from '../components/client/ClientNew';

export default function NewProject() {
  return (
    <React.Fragment>
      <Header />
      <div className='main-panel'>
        <div className='content'>
          <ClientNew />
        </div>
      </div>
    </React.Fragment>
  );
}
