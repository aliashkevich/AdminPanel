import React from 'react';
import ChartistGraph from 'react-chartist';
import {completedTasksChart} from '../global/ChartConfig';
import Spinner from '../global/Spinner';
import {Link} from 'react-router-dom';

class DataGraph3 extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.setState({
      loading: false,
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className='col-md-4'>
          {this.state.loading ? (
            <Spinner spinnerPosition={'inline-spinner'} />
          ) : (
            <Link to={'/projects'}>
              <div className='card card-chart'>
                <div className='card-header card-header-danger'>
                  <ChartistGraph
                    className='ct-chart'
                    data={completedTasksChart.data}
                    type='Line'
                    options={completedTasksChart.options}
                    listener={completedTasksChart.animation}
                  />
                </div>
                <div className='card-body'>
                  <h4 className='card-title'>Active Projects</h4>
                  <p className='card-category'>Last Campaign Performance</p>
                </div>
                <div className='card-footer'>
                  <div className='stats'>
                    <i className='material-icons'>access_time</i> updated 1 day
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

export default DataGraph3;
