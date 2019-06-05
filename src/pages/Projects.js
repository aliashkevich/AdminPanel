import React from 'react';
import Header from '../components/Header';
import ProjectTable from '../components/Project/ProjectTable';
import ProjectAdd from '../components/Project/ProjectAdd';

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
