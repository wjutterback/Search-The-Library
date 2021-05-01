import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Books from './pages/search';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Router>
        <Switch>
          <Route exact path={'/'}>
            <Books />
          </Route>
        </Switch>
        <div></div>
      </Router>
    </div>
  );
}

export default App;
