import React from 'react';
import ChartistGraph from 'react-chartist';
import {emailsSubscriptionChart} from '../global/ChartConfig';

class DataGraph2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      didMount: false,
    };
  }
  componentDidMount() {
    this.setState({didMount: true});
  }

  render() {
    const {didMount} = this.state;
    return (
      <React.Fragment>
        <div className='col-md-4'>
          <div className='card card-chart'>
            <div className='card-header card-header-warning'>
              <ChartistGraph
                className='ct-chart'
                data={emailsSubscriptionChart.data}
                type='Bar'
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </div>
            <div className='card-body'>
              <h4 className='card-title'>New Clients</h4>
              <p className='card-category'>Last Campaign Performance</p>
            </div>
            <div className={`card-footer bounce-in ${didMount && 'visible'}`}>
              <div className='stats'>
                <i className='material-icons'>access_time</i> updated 2 days ago
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DataGraph2;
