import React from 'react';
import Header from '../components/Header';
import ProjectsTable from '../components/Projects/ProjectsTable';
import AddProjectButton from '../components/Projects/AddProjectButton';

export default class Projects extends React.Component {
  static defaultProps = {
    url: 'https://lesewert.herokuapp.com/api/v1',
  };

  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    fetch(this.props.url + '/projects')
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
      <React.Fragment>
        <Header />
        <div className='main-panel'>
          <div className='content'>
            <div className='container-fluid'>
              <AddProjectButton />
              <ProjectsTable projects={this.state.projects} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
