import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Contact from './Contact';
import Portfolio from './Portfolio';
import NoMatch from './NoMatch';
import Home from './Home';
import { Router, IndexRoute, Route, browserHistory } from 'react-router'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/portfolio' component={Portfolio}/>
      <Route path='/contact' component={Contact}/>
    </Route>
    <Route path='/*' component={NoMatch}/>
  </Router>
  ,document.getElementById('root')
);
