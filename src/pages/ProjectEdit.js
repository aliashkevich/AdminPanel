import React from 'react';
import Header from '../components/Header';
import ProjectNew from '../components/project/ProjectNew';

export default function NewProject() {
  return (
    <React.Fragment>
      <Header />
      <div className='main-panel'>
        <div className='content'>
          <ProjectNew edit={true} />
        </div>
      </div>
    </React.Fragment>
  );
}
