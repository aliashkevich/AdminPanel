import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
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
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: this.isTokenPresent(),
    };

    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.isTokenPresent = this.isTokenPresent.bind(this);
  }

  componentDidMount() {
    document.addEventListener('authenticated', this.checkAuthentication);
  }

  componentWillUnmount() {
    document.removeEventListener('authenticated', this.checkAuthentication);
  }

  checkAuthentication() {
    this.setState({
      isAuthenticated: this.isTokenPresent(),
    });
  }

  isTokenPresent() {
    return localStorage.getItem('token') !== null;
  }

  render() {
    const LoginContainer = () => (
      <React.Fragment>
        <Route exact path='/' render={() => <Redirect to='/login' />} />
        <Route exact path='/login' component={Login} />
        <Route path='/dashboard' render={() => <Redirect to='/login' />} />
        <Route exact path='/projects' render={() => <Redirect to='/login' />} />
        <Route exact path='/clients' render={() => <Redirect to='/login' />} />
        <Route path='/profile' render={() => <Redirect to='/login' />} />
        <Route exact path='/tasks' render={() => <Redirect to='/login' />} />
        <Route
          exact
          path='/administration'
          render={() => <Redirect to='/login' />}
        />
      </React.Fragment>
    );

    const DefaultContainer = () => (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path='/login' render={() => <Redirect to='/' />} />
          <Route exact path='/' component={Dashboard} />
          <Route path='/dashboard' component={Dashboard} />
          <Route exact path='/projects' component={Project} />
          <Route path='/projects/new' component={NewProject} />
          <Route exact path='/projects/:id' component={ProjectDetail} />
          <Route exact path='/projects/edit/:id' component={ProjectEdit} />
          <Route exact path='/clients' component={Clients} />
          <Route path='/clients/new' component={NewClient} />
          <Route path='/clients/edit' component={NewClient} />
          <Route exact path='/clients/:id' component={ClientDetail} />
          <Route path='/profile' component={ProfilePage} />
          <Route exact path='/tasks' component={Tasks} />
          <Route path='/tasks/new' component={NewTask} />
          <Route exact path='/tasks/:id' component={TaskDetail} />
          <Route exact path='/tasks/edit/:id' component={NewTask} />
          <Route exact path='/administration' component={Users} />
        </Switch>
      </React.Fragment>
    );

    return (
      <BrowserRouter>
        <Switch>
          {this.state.isAuthenticated ? (
            <Route component={DefaultContainer} />
          ) : (
            <Route component={LoginContainer} />
          )}
        </Switch>
      </BrowserRouter>
    );
  }
}
