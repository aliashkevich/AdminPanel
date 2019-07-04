import React from 'react';
import Table from '../global/Table';
import {Link} from 'react-router-dom';
import Spinner from '../global/Spinner';

class ProjectsSummary extends React.Component {
  static defaultProps = {
    url: 'https://lesewert.herokuapp.com/api/v1',
  };
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      updated: false,
      loading: true,
    };
    this.getProjects = this.getProjects.bind(this);
    this.deleteOnClick = this.deleteOnClick.bind(this);
  }

  getProjects() {
    fetch(`${this.props.url}/projects`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          projects: data.projects,
          updated: false,
          loading: false,
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getProjects();
  }

  deleteOnClick(project) {
    const options = {
      method: 'DELETE',
    };
    fetch(`${this.props.url}/projects/${project.id}`, options)
      .then(this.setState({updated: true}))
      .catch(error => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.updated !== prevState.updated) {
      this.getProjects();
    }
  }

  render() {
    const tableData = this.state.projects.map(project => [
      project.id,
      <Link to={`/projects/${project.id}`} className='text-info'>
        {project.title}
      </Link>,
      project.start_date.slice(0, 10),
      project.end_date.slice(0, 10),
      project.participants.length,
    ]);
    return (
      <React.Fragment>
        <div className='col-lg-6 col-md-12'>
          {this.state.loading ? (
            <Spinner />
          ) : (
            <Table
              entities={this.state.projects}
              tableName={'Projects'}
              tableHead={['ID', 'Title', 'Start', 'End', 'Participants']}
              tableData={tableData}
              tableColor={'info'}
            />
          )}
          {/* <div className='card'>
            <div className='card-header card-header-warning'>
              <h4 className='card-title'>Projects</h4>
              <p className='card-category'>Projects nearing to completion</p>
            </div>
            <div className='card-body table-responsive'>
              <table className='table table-hover'>
                <thead className='text-warning'>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Salary</th>
                  <th>Country</th>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Dakota Rice</td>
                    <td>$36,738</td>
                    <td>Niger</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Minerva Hooper</td>
                    <td>$23,789</td>
                    <td>Curaçao</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Sage Rodriguez</td>
                    <td>$56,142</td>
                    <td>Netherlands</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Philip Chaney</td>
                    <td>$38,735</td>
                    <td>Korea, South</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> */}
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectsSummary;
