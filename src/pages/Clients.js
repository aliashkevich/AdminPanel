import React from 'react';
import Header from '../components/Header';
import ClientCard from '../components/Clients/ClientCard';

export default class Clients extends React.Component {
  static defaultProps = {
    url: 'https://lesewert.herokuapp.com/api/v1',
  };

  constructor(props) {
    super(props);

    this.state = {
      clients: [],
    };
  }

  componentDidMount() {
    fetch(this.props.url + '/clients')
      .then(res => res.json())
      .then(data => {
        this.setState({
          clients: data.clients,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className='main-panel'>
          <div className='content'>
            <div className='container-fluid'>
              <div>
                <p>Clients</p>
                {this.state.clients.map(client => (
                  <ClientCard client={client} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
