import React from 'react';
import ClientInfo from './ClientInfoCard';
import ProjectTasksTable from './ProjectTasksTable';
import Spinner from '../global/Spinner';
import {config} from '../../util/config.js';
import './ClientsDetailCard.css';

export default class ClientsDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: {},
      id: props.id,
      loading: true,
    };
    this.getClient = this.getClient.bind(this);
  }

  getClient() {
    fetch(`${config.apiUrl}/clients/${this.state.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          clients: data.client,
          loading: false,
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.setState({id: this.props.id});
    this.getClient();
  }

  render() {
    if (this.state.clients === {}) {
      return null;
    }
    // console.log(this.state);
    return (
      <React.Fragment>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div className='main-panel'>
            <div className='content'>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-lg-12 col-md-12 col-sm-12'>
                    <div className='card'>
                      <div className='card-header card-header-primary'>
                        <h4 className='card-title'>
                          {this.state.clients.name}
                        </h4>
                      </div>
                      {/* summary */}
                      <div className='card-body'>
                        <div className='row'>
                          <ClientInfo clientId={this.state.id} />
                          <ProjectTasksTable clientId={this.state.id} />
                        </div>
                        <div className='row' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
