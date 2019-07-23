import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Project from './pages/Projects';
import Login from './pages/Login';
import ProjectDetail from './pages/ProjectDetail';
import Clients from './pages/Clients';
import ProfilePage from './pages/ProfilePage';
import NewProject from './pages/NewProject';
import NewClient from './pages/NewClient';
import NewTask from './pages/NewTask';
import Tasks from './pages/Tasks';
import Users from './pages/Users';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import ProjectEdit from './pages/ProjectEdit';
import TaskDetail from './pages/TaskDetail';
import ClientDetail from './pages/ClientDetail';

function App() {
  const LoginContainer = () => (
    <React.Fragment>
      <Route exact path='/' render={() => <Redirect to='/login' />} />
      <Route exact path='/login' component={Login} />
    </React.Fragment>
  );

  const DefaultContainer = () => (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/dashboard' component={Dashboard} />
        <Route exact path='/projects' component={Project} />
        <Route path='/projects/new' component={NewProject} />
        <Route exact path='/projects/:id' component={ProjectDetail} />
        <Route exact path='/projects/edit/:id' component={ProjectEdit} />
        <Route exact path='/clients' component={Clients} />
        <Route path='/clients/new' component={NewClient} />
        <Route exact path='/clients/:id' component={ClientDetail} />
        <Route path='/clients/edit' component={NewClient} />
        <Route path='/profile' component={ProfilePage} />
        <Route exact path='/tasks' component={Tasks} />
        <Route exact path='/tasks/new' component={NewTask} />
        <Route exact path='/tasks/edit/:id' component={NewTask} />
        <Route exact path='/tasks/:id' component={TaskDetail} />

        <Route exact path='/administration' component={Users} />
      </Switch>
    </React.Fragment>
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={LoginContainer} />
        <Route component={DefaultContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
