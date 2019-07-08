import React from 'react';
import Header from '../components/Header';
import ClientNew from '../components/client/ClientNew';

export default function NewClient() {
  const {edit} = props;
  return (
    <React.Fragment>
      <Header />
      <div className='main-panel'>
        <div className='content'>
          <ClientNew edit={true} />
        </div>
      </div>
    </React.Fragment>
  );
}
