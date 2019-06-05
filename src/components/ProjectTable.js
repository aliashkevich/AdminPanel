import React, {Component} from 'react';
import ProjectRow from './ProjectRow';

export default class ProjectTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    fetch('https://lesewert.herokuapp.com/api/v1/projects')
      .then(res => res.json())
      .then(data => {
        this.setState({
          projects: data.projects,
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className='main-panel'>
        <div className='content'>
          <div className='container-fluid'>
            <button type='button' className='btn btn-success'>
              <i className='material-icons'>add_circle</i> New project
            </button>
            <div className='row'>
              <div className='col-md-12'>
                <div className='card'>
                  <div className='card-header card-header-warning'>
                    <h4 className='card-title '>Project Overview</h4>
                    <p className='card-category'>
                      {' '}
                      Here is a subtitle for this table
                    </p>
                  </div>
                  <div className='card-body'>
                    <div className='table-responsive'>
                      <table className='table'>
                        <thead className=' text-warning'>
                          <th>ID</th>
                          <th>Title</th>
                          <th>Start</th>
                          <th>End</th>
                          <th>Participants</th>
                          <th />
                          <th />
                        </thead>
                        <tbody>
                          {this.state.projects.map(project => (
                            <ProjectRow project={project} />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>{' '}
            </div>
          </div>{' '}
        </div>
      </div>
    );
  }
}
