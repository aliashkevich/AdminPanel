import React from 'react';
import {config} from '../../util/config.js';
import Spinner from '../global/Spinner';
import {Link} from 'react-router-dom';

export default class ProjectInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      loading: true,
    };
    this.getData = this.getData.bind(this);
  }
  getData() {
    fetch(`${config.apiUrl}/projects/`, {
      headers: new Headers({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      }),
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          projects: data.projects,
          loading: false,
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const projectId = this.props.projectId;

    const selectedProject =
      this.props.projectId || this.state.projects
        ? this.state.projects.find(project => project.id === projectId)
        : null;

    return (
      <div>
        {this.state.loading ? (
          <Spinner spinnerPosition={'inline-spinner'} />
        ) : (
          <Link
            to={{
              pathname: `/projects/${projectId}`,
              state: {
                id: projectId,
              },
            }}>
            <button type='button' className='btn btn-success'>
              <div>
                {selectedProject ? <b>{selectedProject.title}</b> : null}
                {' - '}
                project details <i className='material-icons'>arrow_forward</i>
              </div>
            </button>
          </Link>
        )}
      </div>
    );
  }
}
