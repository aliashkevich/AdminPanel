import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Dashboard from './examples/Dashboard';
import Tables from './examples/Tables';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/tables' component={Tables} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
