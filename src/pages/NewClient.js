import React from 'react';
import ClientNew from '../components/client/ClientNew';

export default function NewClient() {
  return (
    <React.Fragment>
      <div className='main-panel'>
        <div className='content'>
          <ClientNew />
        </div>
      </div>
    </React.Fragment>
  );
}
