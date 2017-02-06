import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import Navigation from './components/Navigation'

const App = (props) => {
  return (
    <div style={{width: '100%', height: '500%'}}>
      <Navigation/>
      {props.children}
    </div>
  );
}

export default App;
