import React from 'react';
import ClientsDetail from '../components/client/ClientsDetail';
import BackClientButton from '../components/client/BackClientButton.js';

const ClientDetail = props => {
  return (
    <React.Fragment>
      <div className='main-panel'>
        <div className='content'>
          <div className='container-fluid'>
            <BackClientButton />
            <ClientsDetail id={props.location.state.id} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ClientDetail;
