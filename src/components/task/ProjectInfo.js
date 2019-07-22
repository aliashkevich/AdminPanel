import React from 'react';
import {config} from '../../util/config.js';
import Spinner from '../global/Spinner';
import {Link} from 'react-router-dom';

export default class ProjectInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: {},
      loading: true,
      projectId: props.projectId,
    };
    this.getData = this.getData.bind(this);
  }
  getData() {
    fetch(`${config.apiUrl}/projects/`)
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
            <button type='button' class='btn btn-success'>
              <b>
                {this.state.projects.find(
                  project => project.id === this.props.projectId,
                ).title
                  ? this.state.projects.find(
                      project => project.id === this.props.projectId,
                    ).title
                  : ''}
              </b>{' '}
              project details <i class='material-icons'>arrow_forward</i>
            </button>
          </Link>
        )}
      </div>
    );
  }
}
