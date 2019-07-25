import React from 'react';
import ProjectDetailCard from '../components/project/ProjectDetailCard';
import BackProjectButton from '../components/project/BackProjectButton';

const ProjectDetail = props => {
  return (
    <React.Fragment>
      <div className='main-panel'>
        <div className='content'>
          <div className='container-fluid'>
            <BackProjectButton />
            <ProjectDetailCard id={props.location.pathname.split('/').pop()} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectDetail;
