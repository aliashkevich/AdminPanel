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

function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Project} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/login' component={Login} />
          <Route path='/tables' component={Tables} />
          <Route path='/projects/:id' component={ProjectDetail} />
          <Route path='/clients' component={Clients} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
