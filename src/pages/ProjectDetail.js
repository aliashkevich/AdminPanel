import React from 'react';
import Header from '../components/Header';
import ProjectDetailCard from '../components/project/ProjectDetailCard';

const ProjectDetail = props => {
  return (
    <React.Fragment>
      <Header />
      <ProjectDetailCard id={props.location.state.id} />
    </React.Fragment>
  );
};

export default ProjectDetail;
