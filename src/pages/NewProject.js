import React from 'react';
import Header from '../components/Header';
import AddNewProject from '../components/Project/ProjectNew';

export default function NewProject() {
  return (
    <React.Fragment>
      <Header />
      <AddNewProject />
    </React.Fragment>
  );
}
