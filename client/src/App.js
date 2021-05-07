import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Books from './pages/search';
import Saved from './pages/saved';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Router>
        <Switch>
          <Route exact path={'/'} component={Books} />
          <Route exact path={'/saved'} component={Saved} />
          <Route path={'*'} component={Books} />
        </Switch>
        <div></div>
      </Router>
    </div>
  );
}

export default App;
