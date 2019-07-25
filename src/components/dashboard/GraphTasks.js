import React from 'react';
import ChartistGraph from 'react-chartist';
import {dailySalesChart} from '../global/ChartConfig';
import Spinner from '../global/Spinner';
import {Link} from 'react-router-dom';

class DataGraph1 extends React.Component {
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
            <Link to={'/tasks'}>
              <div
                className={`card card-chart slide-down ${didMount &&
                  'visible'}`}>
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
                  <div className='stats'>
                    <i className='material-icons'>access_time</i> updated 4
                    minutes ago
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

export default DataGraph1;
