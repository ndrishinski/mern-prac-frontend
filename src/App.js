import React from 'react';
import './App.css';
import {BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import PostPage from './components/PostPage'
import ShowPage from './components/ShowPage'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={PostPage} />
          <Route path="/show" component={ShowPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
