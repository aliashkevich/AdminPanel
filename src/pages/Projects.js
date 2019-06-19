import React from 'react';
import Header from '../components/Header';
import ProjectTable from '../components/projects/ProjectTable';
import ProjectAdd from '../components/projects/ProjectAdd';

export default function Projects() {
  return (
    <React.Fragment>
      <Header />
      <div className='main-panel'>
        <div className='content'>
          <ProjectAdd />
          <ProjectTable />
        </div>
      </div>
    </React.Fragment>
  );
}
