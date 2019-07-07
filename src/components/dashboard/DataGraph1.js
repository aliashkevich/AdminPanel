import React from 'react';
import ChartistGraph from 'react-chartist';
import {dailySalesChart} from '../global/ChartConfig';

class DataGraph1 extends React.Component {
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
            <div className='card-header card-header-success'>
              <ChartistGraph
                className='ct-chart'
                data={dailySalesChart.data}
                type='Line'
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </div>
            <div className='card-body'>
              <h4 className='card-title'>Completed Tasks</h4>
              <p className='card-category'>
                <span className='text-success'>
                  <i className='fa fa-long-arrow-up' /> 55%{' '}
                </span>{' '}
                increase in completed tasks.
              </p>
            </div>
            <div className='card-footer'>
              <div className={`stats bounce-in ${didMount && 'visible'}`}>
                <i className='material-icons'>access_time</i> updated 4 minutes
                ago
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DataGraph1;
