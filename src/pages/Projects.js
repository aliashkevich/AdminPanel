import React from 'react';
import ProjectsTable from '../components/project/ProjectsTable';
import AddProjectButton from '../components/project/AddProjectButton';

export default function Projects() {
  return (
    <React.Fragment>
      <div className='main-panel'>
        <div className='content'>
          <div className='container-fluid'>
            <AddProjectButton />
            <ProjectsTable />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
