import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Dashboard from './examples/Dashboard';
import Tables from './examples/Tables';
import Home from './pages/Home';
import Project from './pages/Projects';
import Login from './pages/Login';
import ProjectDetail from './pages/ProjectDetail';
import Clients from './pages/Clients';
import ProfilePage from './pages/ProfilePage';
import NewProject from './pages/NewProject';
<<<<<<< HEAD
import EditProject from './components/project/ProjectEdit';
=======
import Tasks from './pages/Tasks';
>>>>>>> 0af5f52e0f56a43443a0ad9563a7fce43c645de1

function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Project} />
          <Route path='/projects/new' component={NewProject} />
          <Route path='/projects/edit' component={EditProject} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/login' component={Login} />
          <Route path='/tables' component={Tables} />
          <Route path='/projects/:id' component={ProjectDetail} />
          <Route path='/clients' component={Clients} />
          <Route path='/profile' component={ProfilePage} />
          <Route exact path='/tasks' component={Tasks} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
