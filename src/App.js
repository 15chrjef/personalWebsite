import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import Navigation from './components/Navigation'

const App = (props) => {
  return (
    <div style={{width: '100%', height: '500%'}}>
    <div style={{display:'flex', flexDirection: 'row'}}>
      <div style={{width: '90%'}}>
        <Navigation/>
      </div>
      <img style={{height: '144px', width: '144px'}} src='https://avatars2.githubusercontent.com/u/18706329?v=3&s=460'/>
    </div>
      {props.children}
    </div>
  );
}

export default App;
