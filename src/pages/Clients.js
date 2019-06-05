import React from 'react';
import Header from '../components/Header';
import ClientsTable from '../components/Clients/ClientsTable';

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
        <ClientsTable clients={this.state.clients} />
      </React.Fragment>
    );
  }
}
