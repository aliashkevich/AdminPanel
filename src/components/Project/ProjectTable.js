import React, {Component} from 'react';
import ProjectRow from './ProjectRow';
import MediaQuery from 'react-responsive';

export default class ProjectTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
    this.deleteOnClick = this.deleteOnClick.bind(this);
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

  deleteOnClick(projectId) {
    let header = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'DELETE',
      'Content-Type': 'application/json',
    });
    const options = {
      method: 'DELETE',
      header: header,
    };
    fetch(
      `https://lesewert.herokuapp.com/api/v1/projects/${projectId}`,
      options,
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          projects: data.projects,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-header card-header-warning'>
                <h4 className='card-title'>Projects</h4>
                {/* <p className='card-category'>
                      Here is a subtitle for this table
                    </p> */}
              </div>
              <div className='card-body'>
                <div className='table-responsive'>
                  <table className='table'>
                    <thead className='text-warning'>
                      <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Start</th>
                        <th>End</th>
                        <MediaQuery minDeviceWidth={800}>
                          <th>Participants</th>
                        </MediaQuery>
                        <MediaQuery maxDeviceWidth={800}>
                          <th>Part.</th>
                        </MediaQuery>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.projects.map(project => (
                        <ProjectRow
                          key={project.id}
                          project={project}
                          deleteOnClick={this.deleteOnClick}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
