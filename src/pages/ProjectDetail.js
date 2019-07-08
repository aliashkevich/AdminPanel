import React from 'react';
import ProjectDetailCard from '../components/project/ProjectDetailCard';

const ProjectDetail = props => {
  return (
    <React.Fragment>
      <ProjectDetailCard id={props.location.state.id} />
    </React.Fragment>
  );
};

export default ProjectDetail;
