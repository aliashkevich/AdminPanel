import React from 'react';
import ClientsDetail from '../components/client/ClientsDetail';

const ClientDetail = props => {
  return (
    <React.Fragment>
      <ClientsDetail id={props.location.state.id} />
    </React.Fragment>
  );
};

export default ClientDetail;
