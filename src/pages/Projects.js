import React from 'react';
import Header from '../components/Header';
import ProjectTable from '../components/ProjectTable';
import AddNewProject from '../components/AddNewProject';

export default function Projects() {
  return (
    <React.Fragment>
      <Header />
      <AddNewProject />
      <ProjectTable />
    </React.Fragment>
  );
}
