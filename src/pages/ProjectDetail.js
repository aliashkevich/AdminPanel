import React from 'react';
import Header from '../components/Header';
import ProjectDetailCard from '../components/Project/ProjectDetailCard';
import Dashboard from '../examples/Dashboard';

export default function ProjectDetail() {
  return (
    <React.Fragment>
      <Header />
      <ProjectDetailCard />
      <Dashboard />
    </React.Fragment>
  );
}
