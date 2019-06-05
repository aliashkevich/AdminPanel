import React from 'react';
import Client from './Client';

export default function ClientsTable(props) {
  return (
    <div className='main-panel'>
      <div className='content'>
        <div className='container-fluid'>
          <button type='button' className='btn btn-success'>
            <i className='material-icons'>add_circle</i> New Client
          </button>
          <div className='row'>
            <div className='col-md-12'>
              <div className='card'>
                <div className='card-header card-header-primary'>
                  <h4 className='card-title'>Clients</h4>
                  <p className='card-category'>Clients table description</p>
                </div>
                <div className='card-body'>
                  <div className='table-responsive'>
                    <table className='table'>
                      <thead className='text-primary'>
                        <tr>
                          <th className='text-center'>ID</th>
                          <th>Initials</th>
                          <th>Name</th>
                          <th className='text-right' />
                        </tr>
                      </thead>
                      <tbody>
                        {props.clients.map(client => (
                          <Client key={client.id} client={client} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
