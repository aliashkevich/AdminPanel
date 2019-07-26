import React from 'react';
import ChartistGraph from 'react-chartist';
import {emailsSubscriptionChart} from '../global/ChartConfig';
import Spinner from '../global/Spinner';
import {Link} from 'react-router-dom';

class DataGraph2 extends React.Component {
  state = {
    loading: true,
    didMount: false,
  };

  componentDidMount() {
    this.setState({
      loading: false,
      didMount: true,
    });
  }
  render() {
    const {didMount} = this.state;
    return (
      <React.Fragment>
        <div className='col-md-4'>
          {this.state.loading ? (
            <Spinner spinnerPosition={'inline-spinner'} />
          ) : (
            <Link to={'/clients'}>
              <div
                className={`card card-chart slide-down ${didMount &&
                  'visible'}`}>
                <div className='card-header card-header-warning'>
                  <ChartistGraph
                    className='ct-chart'
                    data={emailsSubscriptionChart.data}
                    type='Bar'
                    options={emailsSubscriptionChart.options}
                    responsiveOptions={
                      emailsSubscriptionChart.responsiveOptions
                    }
                    listener={emailsSubscriptionChart.animation}
                  />
                </div>
                <div className='card-body'>
                  <h4 className='card-title'>New Clients</h4>
                  <p className='card-category'>Last Campaign Performance</p>
                </div>
                <div className='card-footer'>
                  <div className='stats'>
                    <i className='material-icons'>access_time</i> updated 2 days
                    ago
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default DataGraph2;
